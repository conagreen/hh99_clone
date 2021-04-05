import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

import Card from "../components/Card";
import Trend from "../static/Trend.svg";
import Time from "../static/Time.svg";

const PostList = (props) => {
  return (
    <React.Fragment>
       <Responsive>
        <Box height="20px"></Box>
        <FilterBox>
          <Box width="95px" margin="0px 0px 0px 20px">
            <img width="20px" src={Trend} />
            <Text bold size="12pt" margin="12px">
              트렌딩
            </Text>
          </Box>
          <Box width="95px" margin="0px 0px 0px 20px">
            <img width="20px" src={Time} />
            <Text bold size="12pt" margin="12px">
              최신
            </Text>
          </Box>
        </FilterBox>

        <Grid>
          <ListContainer>
            <Card />
          </ListContainer>
        </Grid>
       </Responsive>
    </React.Fragment>
  );
};

const Responsive = styled.div`
  
`;

const FilterBox = styled.div`
  @media (max-width: 768px) {
    width: 650px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 1024px;
  }
  max-width: 1444px;
  height: 25px;
  padding: 16px;
  color: #343a40;
  margin: 0px auto 10px;
  display: flex;
  
`;

const Box = styled.div`
  top: 180px;
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
/* @media (max-width: 1376px){
    width: 1024px;
  }@media (max-width: 1024px){
    width: 768px;
  } @media (max-width: 768px){
    width: 100%;
  } */

const ListContainer = styled.div`
  width: 100vw;
  max-width: 1444px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default PostList;
