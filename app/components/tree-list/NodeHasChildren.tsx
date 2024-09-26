import { IconChevronDown } from "@tabler/icons-react";
import { Group } from "@mantine/core";

interface INodeHasChildren {
  expanded: boolean;
  label: string;
  length: number | undefined;
}

export default function NodeHasChildren({
  expanded,
  label,
  length,
}: INodeHasChildren) {
  return (
    <Group gap={5}>
      <IconChevronDown
        size={16}
        className={`${
          expanded ? "-rotate-0" : "-rotate-90"
        } transition-transform duration-300 hover:bg-[#F4F5F5] rounded`}
      />

      <Group gap={4} className="text-[10px] leading-4">
        <span className="capitalize">{label}</span>
        <span className="text-[#737474]">{"[ " + length + " items ]"}</span>
      </Group>
    </Group>
  );
}
