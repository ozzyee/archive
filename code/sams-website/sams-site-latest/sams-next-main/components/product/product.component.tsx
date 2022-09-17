import React from "react";
import { TProductProps } from "./product.definition";
import { Div, ProductDiv, PriceDiv } from "./product.style";
import { Image } from "../image/image.component";
import { Text } from "../text/text.component";

export function Product({ className, product }: TProductProps) {
  return (
    <div className={className}>
      {product.map((data: any, image: string, url: string, name: string, price: number) => {
        image = data.image.url;
        url = data.url;
        name = data.name
        price = data.price

        

        return (
          <Div>
            <a href={url} target="blank">
              <Image url={image} />
              <div className="text">
                <ProductDiv>
                  <p>{name}</p>
                </ProductDiv>
                
                <PriceDiv>
                  <p>£{price}</p>
                </PriceDiv>
              </div>
            </a>
          </Div>
        );
      })}
    </div>
  );
}
