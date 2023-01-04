import styles from "../../../styles/Home.module.css";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

type ContainerRef = MutableRefObject<null> & {
  positions: number[];
  iteration: number;
  gap: number;
  lastElementIndex: number;
};

export function InfiniteMovingSlideShow({ containerClass, speed, children }: { containerClass?: string; speed: number, children: ReactNode[] }) {
  const ref: ContainerRef = useRef(null) as ContainerRef;

  useEffect(() => {
    ref.iteration = 0;
    ref.positions = [];
    let active = true;

    const callBack = () => {
      if (ref.current && active) {
        moveChildren(ref.current, ref, speed);
        window.requestAnimationFrame(callBack);
      }
    };
    window.requestAnimationFrame(callBack);
    return () => (active = false, undefined);
  }, [ref, speed]);

  return (
    <div className={styles.infiniteMovingSlideShowParent}>
      <div className={styles.infiniteMovingSlideShow + (containerClass ? " " + containerClass : "")} ref={ref}>
        {children}
      </div>
    </div>
  );
}

function moveChildren(e: HTMLElement, ref: ContainerRef, speed: number) {
  const children = [...e.children] as HTMLElement[];

  initializeRef(ref, e, children);
  updatePositions(ref, e, children, speed);
  ref.iteration++;
}

function initializeRef(ref: ContainerRef, container: HTMLElement, children: HTMLElement[]) {
  if (!ref.iteration) {
    ref.iteration = 0;
    ref.positions = children.map(() => 0);
    ref.gap = calculateGap(children);
    ref.lastElementIndex = children.length - 1;
  }
}

function calculateGap(children: HTMLElement[]) {
  if (children.length < 2) {
    return 0;
  }
  const rect1 = children[0].getBoundingClientRect();
  const rect2 = children[1].getBoundingClientRect();
  return rect2.x - (rect1.x + rect1.width);
}

function updatePositions(ref: ContainerRef, container: HTMLElement, children: HTMLElement[], speed: number) {
  for (let i = 0; i < children.length; i++) {
    ref.positions[i] -= speed;

    if (ref.iteration % 100 === 0) {
      const rect = children[i].getBoundingClientRect();
      if (rect.x < 0 && Math.abs(rect.x) > rect.width) {
        const lastElementRect = children[ref.lastElementIndex].getBoundingClientRect();
        ref.positions[i] += lastElementRect.x + lastElementRect.width + Math.abs(rect.x) + ref.gap;
        ref.lastElementIndex = i;
      }
    }

    children[i].style.transform = "translateX(" + ref.positions[i] + "px)";
  }
}
