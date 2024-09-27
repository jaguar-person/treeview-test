import { IconLetterT, IconCopy } from "@tabler/icons-react";
import { Paper, Group, Tooltip } from "@mantine/core";

interface INodeWithoutChild {
  handleClick: (value: string) => void;
  label: string;
  value: string;
}

export default function NodeWithoutChild({
  handleClick,
  label,
  value,
}: INodeWithoutChild) {
  return (
    <Paper className="w-full">
      <Tooltip
        label={
          <Group gap={4}>
            <Paper
              withBorder
              radius={4}
              bg="#F9FAFA"
              p={2}
              className="border-[#DEDFDF] text-[#1F2020]"
            >
              <IconCopy size={12} />
            </Paper>
            <span className="text-[#1F2020] text-[10px] leading-4 px-1 border border-[#DEDFDF] rounded bg-[#F9FAFA] shadow-sm">
              Create column
            </span>
          </Group>
        }
        position="right"
        offset={-110}
        styles={{
          tooltip: { backgroundColor: "white" },
        }}
        onClick={() => handleClick(value)}
      >
        <Group gap={8}>
          <Paper
            p={4}
            bg={"#E6F2FF"}
            withBorder
            radius={4}
            className="border-[#A0BFFC]"
          >
            <IconLetterT size={8} color="#0048C0" />
          </Paper>
          <Group gap={4} className="text-[10px] leading-4 w-4/5">
            <span className="capitalize text-[#1F2020] font-medium">
              {label}
            </span>
            <span className="text-[#737474]">
              {value.slice(0, value.length - 10)}
            </span>
          </Group>
        </Group>
      </Tooltip>
    </Paper>
  );
}
