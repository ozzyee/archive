import React, { MouseEvent } from 'react';
import { GlassBackground } from '../../../glass-background/glass-background.component';
import { TDropdownHeaderProps } from './dropdown-header.definition';
import * as S from './dropdown-header.style';
import { Icons } from '../../../icons/icons.component';

export function DropdownHeader({
  showList,
  icon,
  list,
  closeIcon,
  title,
  selectMany,
  listID,
}: TDropdownHeaderProps) {
  const [_document, set_document] = React.useState(null);

  React.useEffect(() => {
    // @ts-ignore
    set_document(document);
  }, []);

  // @ts-ignore
  const titleElement = _document?.getElementById(listID + 'title');

  if (selectMany) {
    if (list.length > 0) {
      titleElement?.classList.add('display-non');
      titleElement?.classList.remove('display-block');
    } else {
      titleElement?.classList.remove('display-non');
      titleElement?.classList.add('display-block');
    }
  }

  //! NOTE: Use clickHandlers where you originally get an event
  //!       Type event based on the onWhatever here, instead of passing
  //!       the whole e object up 3 or 4 places
  //!       Then trigger with anonymous function () => passedDownFunction()
  const clickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    showList(target.id);

    //* Example of if you only sometimes pass functions to a component
    // if (typeof showList === "function") {
    //   // Fix any undefined errors
    // }
  };

  return (
    <GlassBackground>
      <S.DropDownTitle onClick={clickHandler}>
        <S.Overlay id={listID} />

        <S.CheckBoxTitle>
          <S.TextHolder id={listID + 'title'}>{title}</S.TextHolder>
        </S.CheckBoxTitle>

        {list.length > 0 && (
          <S.MapWrapper>
            {list.map((item: any, key, index) => {
              return (
                <>
                  <S.ItemWrapper>
                    <S.Wrapper>
                      <S.ItemHolder
                        key={key}
                        id="list-item-div"
                        // @ts-ignore
                        className={index ? 'open-animation' : null}
                      >
                        <S.ItemTextHolder>{item.value}</S.ItemTextHolder>

                        <S.RemoveItemDiv id="close-dropdown remove-item">
                          <S.RemoveOverlay
                            id={item.id}
                            // onClick={removeItems}
                            onClick={(e) => closeIcon(e)}
                          />
                          <Icons Icon="close" />
                        </S.RemoveItemDiv>
                      </S.ItemHolder>
                    </S.Wrapper>
                  </S.ItemWrapper>
                </>
              );
            })}
          </S.MapWrapper>
        )}

        <S.IconHolder>
          <Icons Icon={icon} />
        </S.IconHolder>
      </S.DropDownTitle>
    </GlassBackground>
  );
}
