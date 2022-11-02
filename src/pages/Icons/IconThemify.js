import React,{useEffect} from 'react';
import {
    Col,
    Row,
    Card,
    CardBody
} from "reactstrap";

import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const IconThemify = props => {

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Icons", link: "#" },
        { title: "Themify Icons", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Themify Icons', breadcrumbItems)
    })

    return (
        <React.Fragment>
            <MetaTags>
                <title>Themify Icons | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
            </MetaTags>

            <Row>
                <Col md="12">
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Examples</h4>
                            <p className="card-title-desc">
                                Use <code>&lt;i className="ti-arrow-up"&gt;&lt;/i&gt;</code>.
                                    </p>

                            <Row className="icon-demo-content">
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-up"></i> ti-arrow-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-right"></i> ti-arrow-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-left"></i> ti-arrow-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-down"></i> ti-arrow-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrows-vertical"></i> ti-arrows-vertical
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrows-horizontal"></i> ti-arrows-horizontal
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-up"></i> ti-angle-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-right"></i> ti-angle-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-left"></i> ti-angle-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-down"></i> ti-angle-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-double-up"></i> ti-angle-double-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-double-right"></i> ti-angle-double-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-double-left"></i> ti-angle-double-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-angle-double-down"></i> ti-angle-double-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-move"></i> ti-move
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-fullscreen"></i> ti-fullscreen
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-top-right"></i> ti-arrow-top-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-top-left"></i> ti-arrow-top-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-circle-up"></i> ti-arrow-circle-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-circle-right"></i> ti-arrow-circle-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-circle-left"></i> ti-arrow-circle-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrow-circle-down"></i> ti-arrow-circle-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-arrows-corner"></i> ti-arrows-corner
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-split-v"></i> ti-split-v
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-split-v-alt"></i> ti-split-v-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-split-h"></i> ti-split-h
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-point-up"></i> ti-hand-point-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-point-right"></i> ti-hand-point-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-point-left"></i> ti-hand-point-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-point-down"></i> ti-hand-point-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-back-right"></i> ti-back-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-back-left"></i> ti-back-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-exchange-vertical"></i> ti-exchange-vertical
                                        </Col>

                            </Row>


                            <h4 className="card-title mb-4 mt-5">Web App Icons</h4>
                            <Row className="icon-demo-content">
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-wand"></i> ti-wand
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-save"></i> ti-save
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-save-alt"></i> ti-save-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-direction"></i> ti-direction
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-direction-alt"></i> ti-direction-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-user"></i> ti-user
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-link"></i> ti-link
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-unlink"></i> ti-unlink
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-trash"></i> ti-trash
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-target"></i> ti-target
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-tag"></i> ti-tag
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-desktop"></i> ti-desktop
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-tablet"></i> ti-tablet
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-mobile"></i> ti-mobile
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-email"></i> ti-email
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-star"></i> ti-star
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-spray"></i> ti-spray
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-signal"></i> ti-signal
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shopping-cart"></i> ti-shopping-cart
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shopping-cart-full"></i> ti-shopping-cart-full
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-settings"></i> ti-settings
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-search"></i> ti-search
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-zoom-in"></i> ti-zoom-in
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-zoom-out"></i> ti-zoom-out
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-cut"></i> ti-cut
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ruler"></i> ti-ruler
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ruler-alt-2"></i> ti-ruler-alt-2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ruler-pencil"></i> ti-ruler-pencil
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ruler-alt"></i> ti-ruler-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bookmark"></i> ti-bookmark
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bookmark-alt"></i> ti-bookmark-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-reload"></i> ti-reload
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-plus"></i> ti-plus
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-minus"></i> ti-minus
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-close"></i> ti-close
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pin"></i> ti-pin
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pencil"></i> ti-pencil
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pencil-alt"></i> ti-pencil-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-paint-roller"></i> ti-paint-roller
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-paint-bucket"></i> ti-paint-bucket
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-na"></i> ti-na
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-medall"></i> ti-medall
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-medall-alt"></i> ti-medall-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-marker"></i> ti-marker
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-marker-alt"></i> ti-marker-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-lock"></i> ti-lock
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-unlock"></i> ti-unlock
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-location-arrow"></i> ti-location-arrow
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout"></i> ti-layout
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layers"></i> ti-layers
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layers-alt"></i> ti-layers-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-key"></i> ti-key
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-image"></i> ti-image
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-heart"></i> ti-heart
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-heart-broken"></i> ti-heart-broken
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-stop"></i> ti-hand-stop
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-open"></i> ti-hand-open
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hand-drag"></i> ti-hand-drag
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-flag"></i> ti-flag
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-flag-alt"></i> ti-flag-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-flag-alt-2"></i> ti-flag-alt-2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-eye"></i> ti-eye
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-import"></i> ti-import
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-export"></i> ti-export
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-cup"></i> ti-cup
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-crown"></i> ti-crown
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-comments"></i> ti-comments
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-comment"></i> ti-comment
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-comment-alt"></i> ti-comment-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-thought"></i> ti-thought
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-clip"></i> ti-clip
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-check"></i> ti-check
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-check-box"></i> ti-check-box
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-camera"></i> ti-camera
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-announcement"></i> ti-announcement
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-brush"></i> ti-brush
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-brush-alt"></i> ti-brush-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-palette"></i> ti-palette
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-briefcase"></i> ti-briefcase
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bolt"></i> ti-bolt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bolt-alt"></i> ti-bolt-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-blackboard"></i> ti-blackboard
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bag"></i> ti-bag
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-world"></i> ti-world
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-wheelchair"></i> ti-wheelchair
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-car"></i> ti-car
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-truck"></i> ti-truck
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-timer"></i> ti-timer
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ticket"></i> ti-ticket
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-thumb-up"></i> ti-thumb-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-thumb-down"></i> ti-thumb-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-stats-up"></i> ti-stats-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-stats-down"></i> ti-stats-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shine"></i> ti-shine
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shift-right"></i> ti-shift-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shift-left"></i> ti-shift-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shift-right-alt"></i> ti-shift-right-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shift-left-alt"></i> ti-shift-left-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shield"></i> ti-shield
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-notepad"></i> ti-notepad
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-server"></i> ti-server
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pulse"></i> ti-pulse
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-printer"></i> ti-printer
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-power-off"></i> ti-power-off
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-plug"></i> ti-plug
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pie-chart"></i> ti-pie-chart
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-panel"></i> ti-panel
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-package"></i> ti-package
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-music"></i> ti-music
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-music-alt"></i> ti-music-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-mouse"></i> ti-mouse
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-mouse-alt"></i> ti-mouse-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-money"></i> ti-money
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-microphone"></i> ti-microphone
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-menu"></i> ti-menu
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-menu-alt"></i> ti-menu-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-map"></i> ti-map
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-map-alt"></i> ti-map-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-location-pin"></i> ti-location-pin
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-light-bulb"></i> ti-light-bulb
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-info"></i> ti-info
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-infinite"></i> ti-infinite
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-id-badge"></i> ti-id-badge
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-hummer"></i> ti-hummer
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-home"></i> ti-home
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-help"></i> ti-help
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-headphone"></i> ti-headphone
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-harddrives"></i> ti-harddrives
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-harddrive"></i> ti-harddrive
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-gift"></i> ti-gift
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-game"></i> ti-game
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-filter"></i> ti-filter
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-files"></i> ti-files
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-file"></i> ti-file
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-zip"></i> ti-zip
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-folder"></i> ti-folder
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-envelope"></i> ti-envelope
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-dashboard"></i> ti-dashboard
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-cloud"></i> ti-cloud
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-cloud-up"></i> ti-cloud-up
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-cloud-down"></i> ti-cloud-down
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-clipboard"></i> ti-clipboard
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-calendar"></i> ti-calendar
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-book"></i> ti-book
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bell"></i> ti-bell
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-basketball"></i> ti-basketball
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bar-chart"></i> ti-bar-chart
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-bar-chart-alt"></i> ti-bar-chart-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-archive"></i> ti-archive
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-anchor"></i> ti-anchor
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-alert"></i> ti-alert
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-alarm-clock"></i> ti-alarm-clock
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-agenda"></i> ti-agenda
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-write"></i> ti-write
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-wallet"></i> ti-wallet
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-video-clapper"></i> ti-video-clapper
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-video-camera"></i> ti-video-camera
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-vector"></i> ti-vector
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-support"></i> ti-support
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-stamp"></i> ti-stamp
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-slice"></i> ti-slice
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-shortcode"></i> ti-shortcode
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-receipt"></i> ti-receipt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pin2"></i> ti-pin2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pin-alt"></i> ti-pin-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pencil-alt2"></i> ti-pencil-alt2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-eraser"></i> ti-eraser
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-more"></i> ti-more
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-more-alt"></i> ti-more-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-microphone-alt"></i> ti-microphone-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-magnet"></i> ti-magnet
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-line-double"></i> ti-line-double
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-line-dotted"></i> ti-line-dotted
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-line-dashed"></i> ti-line-dashed
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-ink-pen"></i> ti-ink-pen
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-info-alt"></i> ti-info-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-help-alt"></i> ti-help-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-headphone-alt"></i> ti-headphone-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-gallery"></i> ti-gallery
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-face-smile"></i> ti-face-smile
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-face-sad"></i> ti-face-sad
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-credit-card"></i> ti-credit-card
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-comments-smiley"></i> ti-comments-smiley
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-time"></i> ti-time
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-share"></i> ti-share
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-share-alt"></i> ti-share-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-rocket"></i> ti-rocket
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-new-window"></i> ti-new-window
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-rss"></i> ti-rss
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-rss-alt"></i> ti-rss-alt
                                        </Col>

                            </Row>


                            <h4 className="card-title mt-5 mb-4">Control Icons</h4>

                            <Row className="icon-demo-content">

                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-stop"></i> ti-control-stop
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-shuffle"></i> ti-control-shuffle
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-play"></i> ti-control-play
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-pause"></i> ti-control-pause
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-forward"></i> ti-control-forward
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-backward"></i> ti-control-backward
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-volume"></i> ti-volume
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-skip-forward"></i> ti-control-skip-forward
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-skip-backward"></i> ti-control-skip-backward
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-record"></i> ti-control-record
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-control-eject"></i> ti-control-eject
                                        </Col>

                            </Row>


                            <h4 className="card-title mt-5 mb-4">Text Editor</h4>

                            <Row className="icon-demo-content">

                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-paragraph"></i> ti-paragraph
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-uppercase"></i> ti-uppercase
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-underline"></i> ti-underline
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-text"></i> ti-text
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-Italic"></i> ti-Italic
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-smallcap"></i> ti-smallcap
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-list"></i> ti-list
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-list-ol"></i> ti-list-ol
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-align-right"></i> ti-align-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-align-left"></i> ti-align-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-align-justify"></i> ti-align-justify
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-align-center"></i> ti-align-center
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-quote-right"></i> ti-quote-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-quote-left"></i> ti-quote-left
                                        </Col>

                            </Row>


                            <h4 className="card-title mt-5 mb-4">Layout Icons</h4>

                            <Row className="icon-demo-content">

                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-width-full"></i> ti-layout-width-full
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-width-default"></i> ti-layout-width-default
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-width-default-alt"></i> ti-layout-width-default-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-tab"></i> ti-layout-tab
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-tab-window"></i> ti-layout-tab-window
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-tab-v"></i> ti-layout-tab-v
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-tab-min"></i> ti-layout-tab-min
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-slider"></i> ti-layout-slider
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-slider-alt"></i> ti-layout-slider-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-sidebar-right"></i> ti-layout-sidebar-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-sidebar-none"></i> ti-layout-sidebar-none
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-sidebar-left"></i> ti-layout-sidebar-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-placeholder"></i> ti-layout-placeholder
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-menu"></i> ti-layout-menu
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-menu-v"></i> ti-layout-menu-v
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-menu-separated"></i> ti-layout-menu-separated
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-menu-full"></i> ti-layout-menu-full
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-right"></i> ti-layout-media-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-right-alt"></i> ti-layout-media-right-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-overlay"></i> ti-layout-media-overlay
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-overlay-alt"></i> ti-layout-media-overlay-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-overlay-alt-2"></i> ti-layout-media-overlay-alt-2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-left"></i> ti-layout-media-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-left-alt"></i> ti-layout-media-left-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-center"></i> ti-layout-media-center
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-media-center-alt"></i> ti-layout-media-center-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-list-thumb"></i> ti-layout-list-thumb
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-list-thumb-alt"></i> ti-layout-list-thumb-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-list-post"></i> ti-layout-list-post
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-list-large-image"></i> ti-layout-list-large-image
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-line-solid"></i> ti-layout-line-solid
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid4"></i> ti-layout-grid4
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid3"></i> ti-layout-grid3
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid2"></i> ti-layout-grid2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid2-thumb"></i> ti-layout-grid2-thumb
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-cta-right"></i> ti-layout-cta-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-cta-left"></i> ti-layout-cta-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-cta-center"></i> ti-layout-cta-center
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-cta-btn-right"></i> ti-layout-cta-btn-right
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-cta-btn-left"></i> ti-layout-cta-btn-left
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column4"></i> ti-layout-column4
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column3"></i> ti-layout-column3
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column2"></i> ti-layout-column2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-accordion-separated"></i> ti-layout-accordion-separated
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-accordion-merged"></i> ti-layout-accordion-merged
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-accordion-list"></i> ti-layout-accordion-list
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-widgetized"></i> ti-widgetized
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-widget"></i> ti-widget
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-widget-alt"></i> ti-widget-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-view-list"></i> ti-view-list
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-view-list-alt"></i> ti-view-list-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-view-grid"></i> ti-view-grid
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-upload"></i> ti-upload
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-download"></i> ti-download
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-loop"></i> ti-loop
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-sidebar-2"></i> ti-layout-sidebar-2
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid4-alt"></i> ti-layout-grid4-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid3-alt"></i> ti-layout-grid3-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-grid2-alt"></i> ti-layout-grid2-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column4-alt"></i> ti-layout-column4-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column3-alt"></i> ti-layout-column3-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-layout-column2-alt"></i> ti-layout-column2-alt
                                        </Col>

                            </Row>


                            <h4 className="card-title mt-5 mb-4">Brand Icons</h4>

                            <Row className="icon-demo-content">

                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-flickr"></i> ti-flickr
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-flickr-alt"></i> ti-flickr-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-instagram"></i> ti-instagram
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-google"></i> ti-google
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-github"></i> ti-github
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-facebook"></i> ti-facebook
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-dropbox"></i> ti-dropbox
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-dropbox-alt"></i> ti-dropbox-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-dribbble"></i> ti-dribbble
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-apple"></i> ti-apple
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-android"></i> ti-android
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-yahoo"></i> ti-yahoo
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-trello"></i> ti-trello
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-stack-overflow"></i> ti-stack-overflow
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-soundcloud"></i> ti-soundcloud
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-sharethis"></i> ti-sharethis
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-sharethis-alt"></i> ti-sharethis-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-reddit"></i> ti-reddit
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-microsoft"></i> ti-microsoft
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-microsoft-alt"></i> ti-microsoft-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-linux"></i> ti-linux
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-jsfiddle"></i> ti-jsfiddle
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-joomla"></i> ti-joomla
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-html5"></i> ti-html5
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-css3"></i> ti-css3
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-drupal"></i> ti-drupal
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-wordpress"></i> ti-wordpress
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-tumblr"></i> ti-tumblr
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-tumblr-alt"></i> ti-tumblr-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-skype"></i> ti-skype
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-youtube"></i> ti-youtube
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-vimeo"></i> ti-vimeo
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-vimeo-alt"></i> ti-vimeo-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-twitter"></i> ti-twitter
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-twitter-alt"></i> ti-twitter-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-linkedin"></i> ti-linkedin
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pinterest"></i> ti-pinterest
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-pinterest-alt"></i> ti-pinterest-alt
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-themify-logo"></i> ti-themify-logo
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-themify-favicon"></i> ti-themify-favicon
                                        </Col>
                                <Col xl="3" lg="4" sm="6">
                                    <i className="ti-themify-favicon-alt"></i> ti-themify-favicon-alt
                                        </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );

}

export default connect(null, { setBreadcrumbItems })(IconThemify);