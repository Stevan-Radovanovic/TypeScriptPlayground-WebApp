export interface Draggable {
  dragStart(event: DragEvent): void;
  dragEnd(event: DragEvent): void;
}

export interface DragTarget {
  dragOver(event: DragEvent): void;
  dragLeave(event: DragEvent): void;
  drop(event: DragEvent): void;
}
