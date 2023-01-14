import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./list.css"
export const List = ({ renderItem, data }) => {

    return (
        <Row>
            {data?.map((item, index) => renderItem(item, index))}
        </Row>

    )
}
