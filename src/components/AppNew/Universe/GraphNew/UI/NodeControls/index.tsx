import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useCallback, useMemo, useRef } from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import DeleteIcon from '~/components/Icons/DeleteIcon'
import EditIcon from '~/components/Icons/EditIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { fetchNodeEdges } from '~/network/fetchGraphDataNew'
import { EdgeNew, NodeNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { buttonColors } from './constants'

const reuseableVector3 = new Vector3()

export const NodeControls = memo(() => {
  const ref = useRef<Group | null>(null)

  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: openRemoveNodeModal } = useModal('removeNode')
  const { open: addEdgeToNodeModal } = useModal('addEdgeToNode')

  const [isAdmin] = useUserStore((s) => [s.isAdmin])

  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  const [selectionGraphData, setSelectionData, selectedNodeRelativeIds, setSelectedNodeRelativeIds] = useGraphStore(
    (s) => [s.selectionGraphData, s.setSelectionData, s.selectedNodeRelativeIds, s.setSelectedNodeRelativeIds],
  )

  const [allGraphData] = useGraphStore((s) => [s.data, s.setData])
  const selectedNode = useSelectedNode()
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)
  const setShowSelectionGraph = useGraphStore((s) => s.setShowSelectionGraph)

  useFrame(() => {
    setPosition()
  })

  const getChildren = useCallback(async () => {
    try {
      if (selectedNode?.ref_id) {
        const res = await fetchNodeEdges(selectedNode?.ref_id, selectionGraphData.nodes.length || 0)

        const newLinks = (res?.edges || []).filter(
          (i) => !selectionGraphData.links.some((l) => i.target === l.target && i.source === l.source),
        )

        const newNodes = (res?.nodes || []).filter((i) => !selectionGraphData.nodes.some((l) => i.ref_id === l.ref_id))

        setSelectionData({
          links: [
            ...selectionGraphData.links,
            ...newLinks.map((i: EdgeNew) => ({
              ...i,
              sourcePosition: new Vector3(),
              targetPosition: new Vector3(),
            })),
          ],
          nodes: [...selectionGraphData.nodes, ...newNodes.map((i: NodeNew) => ({ ...i, x: 0, y: 0, z: 0 }))],
        })

        setSelectedNodeRelativeIds([...new Set([...selectedNodeRelativeIds, ...newNodes.map((i) => i.ref_id)])])
      }
    } catch (error) {
      console.log(error)
    }
  }, [
    selectedNode?.ref_id,
    selectedNodeRelativeIds,
    selectionGraphData.links,
    selectionGraphData.nodes,
    setSelectedNodeRelativeIds,
    setSelectionData,
  ])

  const setPosition = useCallback(() => {
    const data = showSelectionGraph ? selectionGraphData : allGraphData

    if (ref.current) {
      const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)

      if (selected) {
        const newPosition = reuseableVector3.set(selected?.x, selected?.y, selected?.z)

        ref.current.position.copy(newPosition)
      }
    }
  }, [selectedNode, showSelectionGraph, selectionGraphData, allGraphData])

  const buttons = useMemo(() => {
    const conditionalActions =
      isAdmin || true
        ? [
            {
              key: 'control-key-1',
              colors: buttonColors(showSelectionGraph).focus,
              icon: <PlusIcon />,
              left: -80,
              className: 'add',
              onClick: () => {
                addEdgeToNodeModal()
              },
            },
            {
              key: 'control-key-2',
              colors: buttonColors(showSelectionGraph).focus,
              icon: <EditIcon />,
              left: -40,
              className: 'edit',
              onClick: () => {
                openEditNodeNameModal()
              },
            },
            {
              key: 'control-key-3',
              colors: buttonColors(showSelectionGraph).focus,
              icon: <DeleteIcon />,
              left: 0,
              className: 'delete',
              onClick: () => {
                openRemoveNodeModal()
              },
            },
          ]
        : []

    const baseActions = [
      {
        key: 'control-key-5',
        colors: buttonColors(true).close,
        icon: <NodesIcon />,
        left: 40,
        className: 'exit',
        onClick: () => {
          getChildren()
        },
      },
      {
        key: 'control-key-6',
        colors: buttonColors(true).close,
        icon: <MdClose />,
        left: 40,
        className: 'exit',
        onClick: () => {
          setSelectedNode(null)
          setShowSelectionGraph(false)
        },
      },
    ]

    return [...conditionalActions, ...baseActions].map((i, index) => ({ ...i, left: -80 + index * 40 }))
  }, [
    isAdmin,
    showSelectionGraph,
    addEdgeToNodeModal,
    openEditNodeNameModal,
    openRemoveNodeModal,
    setShowSelectionGraph,
    setSelectedNode,
    getChildren,
  ])

  if (!selectedNode) {
    return null
  }

  return (
    <group ref={ref}>
      <Html
        center
        className="control-panel"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerOut={(e) => e.stopPropagation()}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        sprite
        zIndexRange={[16777271, 16777272]}
      >
        {buttons.map((b) => (
          <IconButton
            key={b.key}
            backgroundColor={b.colors.backgroundColor}
            borderColor={b.colors.borderColor}
            className={b.className}
            fontColor={b.colors.fontColor}
            left={b.left}
            onClick={(e) => {
              e.stopPropagation()
              b.onClick()
            }}
          >
            {b.icon}
          </IconButton>
        ))}
      </Html>
    </group>
  )
})

NodeControls.displayName = 'NodeControls'

type ButtonProps = {
  left: number
  backgroundColor?: string
  borderColor?: string
  fontColor?: string
}

const IconButton = styled.div<ButtonProps>`
  position: fixed;
  top: -60px;
  left: ${(p: ButtonProps) => -7 + p.left}px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p: ButtonProps) => (p.backgroundColor ? p.backgroundColor : '#000000bb')};
  color: ${(p: ButtonProps) => (p.fontColor ? p.fontColor : '#ffffff')};
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`
