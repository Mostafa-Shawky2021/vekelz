import React, { useState } from 'react'
import { OviewViewCard } from './overview'
import { List as ListOverview } from '../../components/list'
import overviewData from '../../data/overview.json'
import { Col, Row } from 'react-bootstrap'
import { MilesStatistics } from './milesstatistics'

export const Dashboard = () => {
    const [overViewData, setOverViewData] = useState(overviewData.data)
    return (
        <>
            <ListOverview
                data={overViewData}
                renderItem={(props, index) => <OviewViewCard key={index} {...props} />} />

            <Row style={{ marginTop: '20px' }}>
                <Col xs={6}>
                    <MilesStatistics />
                </Col>
                <Col xs={6}>
                    <MilesStatistics />
                </Col>
            </Row>
        </>
    )
}
