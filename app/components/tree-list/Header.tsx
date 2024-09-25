"use client";

import { IconListDetails, IconX } from "@tabler/icons-react";
import { Paper, Text, Group } from "@mantine/core";

export default function TreeListHeader() {
  return (
    <Group
      justify={"space-between"}
      p={16}
      className="border-b border-[#ECEDED]"
    >
      <Group gap={8}>
        <Paper bg={"#ECEDED"} p={4} className="rounded-lg cursor-pointer">
          <IconListDetails stroke={2} size={16} />
        </Paper>
        <Text size={"base"} fw={500}>
          Cell details
        </Text>
      </Group>
      <Paper p={4} className="cursor-pointer">
        <IconX stroke={2} size={16} />
      </Paper>
    </Group>
  );
}
