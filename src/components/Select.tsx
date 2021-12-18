import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from './common/index';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { BiCheck } from 'react-icons/bi';
type TOption = {
  label: string;
  value: string;
};
type Props = {
  defaultOption: string;
  title: string;
  options: TOption[];
  changeOption: (value: string) => void;
};
const Select = ({ title, defaultOption, options, changeOption }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const menusOpen = document.querySelectorAll('.showMenu');
    menusOpen.forEach((menu) => menu.classList.remove('showMenu'));
    setShow(true);
    menuRef.current?.classList.add('showMenu');
  };

  const hiddenMenu = () => {
    setShow(false);
    const menusOpen = document.querySelectorAll('.showMenu');
    menusOpen.forEach((menu) => menu.classList.remove('showMenu'));
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('click', () => hiddenMenu());
    }
  }, [show]);

  return (
    <StyledSelect>
      <SelectButton onClick={showMenu}>
        {title}
        <IoMdArrowDropdown />
      </SelectButton>
      <Menu ref={menuRef}>
        <MenuHeader>
          <TextHeader> Select {title}</TextHeader>
          <RiCloseFill />
        </MenuHeader>
        <Options>
          {options.map((option, idx) => (
            <Option key={idx} onClick={() => changeOption(option.value)}>
              {option.value === defaultOption ? (
                <BiCheck />
              ) : (
                <BiCheck style={{ color: 'transparent' }} />
              )}
              {option.label}
            </Option>
          ))}
        </Options>
      </Menu>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  position: relative;

  .showMenu {
    display: block;
  }
`;

const SelectButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Menu = styled.div`
  display:none;
  position:absolute;
  right:-90px;
  top:45px;
  width: 200px;
  border: 1px solid  ${({ theme }) => theme.color.border};
  border-radius 6px;
  background: ${({ theme }) => theme.color.primary};
  @media screen and (min-width: 768px) {
    
    right:0;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const TextHeader = styled.p`
  font-size: 0.8rem;
`;
const Options = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export default Select;
