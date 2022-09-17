import React from "react";
import { TLoadingBarsProps } from "./loading-bars.definition";

export function Component({ className, widths }: TLoadingBarsProps) {
  let bars = [];
  for (let i = 0; i < 20; i++) {
    bars.push(i);
  }

  return (
    <div className={className}>
      <div className="center">
        <div className="ex1">
          <div className="scroll">
            {bars.map((_, index) => (
              <p
                key={index}
                className="shinny info__text_one"
                style={{ width: widths[index] + "%" }}
              ></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
