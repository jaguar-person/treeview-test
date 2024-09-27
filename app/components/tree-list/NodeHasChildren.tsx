import { IconChevronDown } from "@tabler/icons-react";
import { Group, Paper } from "@mantine/core";
import { roboto_mono } from "@/app/fonts";

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

      <Paper className="text-[10px] leading-4">
        <span className="capitalize text-[#1F2020] font-medium">{label}</span>
        <span className={roboto_mono.className + " text-[#737474]"}>
          {" [" + length + " items]"}
        </span>
      </Paper>
    </Group>
  );
}
