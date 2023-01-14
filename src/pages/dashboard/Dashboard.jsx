import React, { useState } from 'react'
import { OviewViewCard } from './overview'
import { List as ListOverview } from '../../components/list'
import { List as ListRecommend } from '../../components/list'
import { MilesStatistics } from './milesstatistics'
import { CarStatistics } from './carstatistics'
import overviewData from '../../data/overview.json'
import recommendcarData from '../../data/recommendcar.json'

import { Col, Row } from 'react-bootstrap'
import { RecommendedCar } from './recommendcar/RecommendCar'

export const Dashboard = () => {
    const [overViewData, setOverViewData] = useState(overviewData.data)
    const [recommendCarData, setRecommendCarData] = useState(recommendcarData.data)

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
                    <CarStatistics />
                </Col>
            </Row>
            <ListRecommend
                data={recommendCarData}
                renderItem={(props, index) => <RecommendedCar key={index} {...props} />}

            />
        </>
    )
}
