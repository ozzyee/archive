import * as React from "react";
import { SectionHeader } from "../section-header/section-header.component";
import { Sections } from "../sections/sections.component";
import { TShopProps } from "./shop.definition";
import {} from "./shop.style";
import { Holder, Wrapper } from "../albums/albums.style";
import { Product } from "../product/product.component";

export function Shop({ className, product }: TShopProps) {
  return (
    <section id="shop__section">
      <Sections color="LightBlack">
        <div className="center__colum">
          <SectionHeader>Shop</SectionHeader>
          <div className="shop__wrapper">
            <Holder>
              <Wrapper>
                <Product product={product} />
              </Wrapper>
            </Holder>
          </div>
        </div>
      </Sections>
    </section>
  );
}

//Wrapper
