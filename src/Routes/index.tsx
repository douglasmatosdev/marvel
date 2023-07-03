'use client'
import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages'
import Dashboard from '../Components/Dashboard'
import styled from 'styled-components'

const Routes: FC = () => {
    return (
        <RouterContainer>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </Router>
            <Dashboard />
        </RouterContainer>
    )
}

const RouterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow: hidden;
    &,* {
        box-sizing: border-box;
    }

`

export default Routes