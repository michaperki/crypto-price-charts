import React from "react";
import styled from "styled-components";

const PriceListContainer = styled.div`
  margin-top: 16px;
`;

const PriceListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const PriceListHeader = styled.th`
  background-color: #333;
  color: #fff;
  padding: 8px;
  text-align: left;
`;

const PriceListRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const PriceListData = styled.td`
  padding: 8px;
`;

const PriceList = ({ data }) => {
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // format the volume to a string with commas
  const volumeFormatter = new Intl.NumberFormat("en-US");

  return (
    <PriceListContainer>
      <PriceListTable>
        <thead>
          <tr>
            <PriceListHeader>Name</PriceListHeader>
            <PriceListHeader>Price</PriceListHeader>
            <PriceListHeader>Volume</PriceListHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <PriceListRow key={item.id}>
              <PriceListData>{item.name}</PriceListData>
              <PriceListData>{priceFormatter.format(item.current_price)}</PriceListData>
              <PriceListData>{volumeFormatter.format(item.total_volume)}</PriceListData>
            </PriceListRow>
          ))}
        </tbody>
      </PriceListTable>
    </PriceListContainer>
  );
};

export default PriceList;
