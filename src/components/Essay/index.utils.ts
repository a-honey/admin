import type { EssayStatusType } from ".";

export enum EssayStatusLabel {
  private = "비공개",
  published = "공개",
  linkedout = "링크드아웃",
}

export const getEssayStatusLabel = (status: EssayStatusType): string => {
  return EssayStatusLabel[status];
};
