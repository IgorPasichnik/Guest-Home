import React, { useEffect } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import { Options, OverlayScrollbars } from "overlayscrollbars";

type ScrollbarsAutoHideBehavior = "never" | "scroll" | "move" | "leave";

type ScrollbarsConfig = {
  scrollbars: {
    theme: string;
    visible: string;
    colors: string;
    autoHide: ScrollbarsAutoHideBehavior;
  };
};

const config: ScrollbarsConfig = {
  scrollbars: {
    theme: "os-theme-light",
    visible: "auto",
    colors: "white",
    autoHide: "leave",
  },
};

const useScrollbar = ({
  root,
  hasScroll,
}: {
  root: React.RefObject<any>;
  hasScroll: boolean;
}) => {
  useEffect(() => {
    let scrollBars: OverlayScrollbars | undefined;

    if (root.current && hasScroll) {
      scrollBars = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scrollBars) scrollBars.destroy();
    };
  }, [root, hasScroll]);
};

export default useScrollbar;
