"use client";

import { useEffect, useState } from "react";
import { Box, Paper, Stack, Group, Tree } from "@mantine/core";
import TreeListHeader from "./Header";
import NodeHasChildren from "./NodeHasChildren";
import NodeWithoutChild from "./NodeWithoutChild";
import { useTreeContext } from "@/app/context/TreeContext";
import convertToTreeData from "@/app/utils/convertToTreeData";
import findPath from "@/app/utils/findPath";

export const TreeList = () => {
  const { treeData } = useTreeContext();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (treeData?.length) {
      const temp = convertToTreeData(JSON.parse(treeData));
      setData(temp);
    } else {
      setData([]);
    }
  }, [treeData]);

  const CopyToClipboard = (value: string) => () => {
    const fullPath = findPath(value, data);

    if (fullPath) {
      const result = fullPath.join("->");
      navigator.clipboard
        .writeText(result)
        .then(() => {
          console.log("Copied to clipboard:", result);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <Box w={324} h={768} m={40} color="#1F2020" className="overflow-y-scroll">
      <Stack
        gap={0}
        bg={"white"}
        className="rounded-lg border border-[#ECEDED] shadow-md"
      >
        <TreeListHeader />
        <Paper p={16}>
          <Tree
            data={data}
            levelOffset={0}
            classNames={{
              root: "flex flex-col gap-2",
              subtree:
                "flex flex-col gap-2 border-l border-[#ECEDED] mt-2 pl-2 ml-2",
            }}
            renderNode={({ node, expanded, hasChildren, elementProps }) => {
              return !!hasChildren ? (
                <Group {...elementProps}>
                  <NodeHasChildren
                    expanded={expanded}
                    label={String(node.label)}
                    length={node.children?.length}
                  />
                </Group>
              ) : (
                <Group {...elementProps}>
                  <NodeWithoutChild
                    handleClick={CopyToClipboard(String(node.value))}
                    label={String(node.label)}
                    value={String(node.value)}
                  />
                </Group>
              );
            }}
          />
        </Paper>
      </Stack>
    </Box>
  );
};
