import React from 'react';
import styled from 'styled-components';
import BoldCategoryItem from './BoldCategoryItem.jsx';

const PictureContainer = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  &:hover {
    transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42), opacity 150ms easy-out, border-color 200ms ease-out;
    border-radius: 9px;
    background: #FFFFFF;
    box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
  }
`;

const CategoryPicture = styled.img`
max-height: 220px;
width: auto;
border-radius: 3px;
`;

const PicListContainer = styled.ul`
  padding: 0px;
  list-style: none;
`;

const ItalicSpan = styled.span`
  font-family: "Graphik Webfont";
  font-size: 15px;
  font-style: italic;
  color: #616161;
`;

const MenuCategoryPicture = (props) => (
  <PictureContainer>
    <CategoryPicture src="https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0" />
    <ItalicSpan>Editors' Picks</ItalicSpan>
    <PicListContainer>
      <BoldCategoryItem item={props.more} />
    </PicListContainer>
  </PictureContainer>
);

export default MenuCategoryPicture;
