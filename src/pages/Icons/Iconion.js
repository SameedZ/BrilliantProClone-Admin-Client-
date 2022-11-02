import React,{useEffect} from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

import MetaTags from 'react-meta-tags';

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const IconIon = props => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Icons", link: "#" },
    { title: "Ion Icons", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Ion Icons', breadcrumbItems)
  })


  return (
    <React.Fragment>

      <MetaTags>
        <title>Ion Icons | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col md={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Examples</CardTitle>
              <p className="card-title-desc">Use <code>&lt;i className="ion-ionic"&gt;&lt;/i&gt;</code>.</p>

              <Row className="icon-demo-content">
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-add"></i> ion ion-md-add
                                    </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-add-circle"></i> ion ion-md-add-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-add-circle-outline"></i> ion ion-md-add-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-airplane"></i> ion ion-md-airplane
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-alarm"></i> ion ion-md-alarm
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-albums"></i> ion ion-md-albums
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-alert"></i> ion ion-md-alert
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-american-football"></i> ion ion-md-american-football
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-analytics"></i> ion ion-md-analytics
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-aperture"></i> ion ion-md-aperture
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-apps"></i> ion ion-md-apps
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-appstore"></i> ion ion-md-appstore
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-archive"></i> ion ion-md-archive
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-back"></i> ion ion-md-arrow-back
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-down"></i> ion ion-md-arrow-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropdown"></i> ion ion-md-arrow-dropdown
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropdown-circle"></i> ion ion-md-arrow-dropdown-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropleft"></i> ion ion-md-arrow-dropleft
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropleft-circle"></i> ion ion-md-arrow-dropleft-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropright"></i> ion ion-md-arrow-dropright
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropright-circle"></i> ion ion-md-arrow-dropright-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropup"></i> ion ion-md-arrow-dropup
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-dropup-circle"></i> ion ion-md-arrow-dropup-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-forward"></i> ion ion-md-arrow-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-round-back"></i> ion ion-md-arrow-round-back
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-round-down"></i> ion ion-md-arrow-round-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-round-forward"></i> ion ion-md-arrow-round-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-round-up"></i> ion ion-md-arrow-round-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-arrow-up"></i> ion ion-md-arrow-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-at"></i> ion ion-md-at
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-attach"></i> ion ion-md-attach
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-backspace"></i> ion ion-md-backspace
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-barcode"></i> ion ion-md-barcode
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-baseball"></i> ion ion-md-baseball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-basket"></i> ion ion-md-basket
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-basketball"></i> ion ion-md-basketball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-battery-charging"></i> ion ion-md-battery-charging
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-battery-dead"></i> ion ion-md-battery-dead
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-battery-full"></i> ion ion-md-battery-full
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-beaker"></i> ion ion-md-beaker
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bed"></i> ion ion-md-bed
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-beer"></i> ion ion-md-beer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bicycle"></i> ion ion-md-bicycle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bluetooth"></i> ion ion-md-bluetooth
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-boat"></i> ion ion-md-boat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-body"></i> ion ion-md-body
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bonfire"></i> ion ion-md-bonfire
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-book"></i> ion ion-md-book
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bookmark"></i> ion ion-md-bookmark
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bookmarks"></i> ion ion-md-bookmarks
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bowtie"></i> ion ion-md-bowtie
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-briefcase"></i> ion ion-md-briefcase
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-browsers"></i> ion ion-md-browsers
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-brush"></i> ion ion-md-brush
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bug"></i> ion ion-md-bug
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-build"></i> ion ion-md-build
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bulb"></i> ion ion-md-bulb
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-bus"></i> ion ion-md-bus
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-business"></i> ion ion-md-business
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cafe"></i> ion ion-md-cafe
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-calculator"></i> ion ion-md-calculator
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-calendar"></i> ion ion-md-calendar
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-call"></i> ion ion-md-call
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-camera"></i> ion ion-md-camera
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-car"></i> ion ion-md-car
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-card"></i> ion ion-md-card
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cart"></i> ion ion-md-cart
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cash"></i> ion ion-md-cash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cellular"></i> ion ion-md-cellular
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-chatboxes"></i> ion ion-md-chatboxes
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-chatbubbles"></i> ion ion-md-chatbubbles
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-checkbox"></i> ion ion-md-checkbox
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-checkbox-outline"></i> ion ion-md-checkbox-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-checkmark"></i> ion ion-md-checkmark
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-checkmark-circle"></i> ion ion-md-checkmark-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-checkmark-circle-outline"></i> ion ion-md-checkmark-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-clipboard"></i> ion ion-md-clipboard
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-clock"></i> ion ion-md-clock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-close"></i> ion ion-md-close
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-close-circle"></i> ion ion-md-close-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-close-circle-outline"></i> ion ion-md-close-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud"></i> ion ion-md-cloud
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud-circle"></i> ion ion-md-cloud-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud-done"></i> ion ion-md-cloud-done
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud-download"></i> ion ion-md-cloud-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud-outline"></i> ion ion-md-cloud-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloud-upload"></i> ion ion-md-cloud-upload
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloudy"></i> ion ion-md-cloudy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cloudy-night"></i> ion ion-md-cloudy-night
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-code"></i> ion ion-md-code
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-code-download"></i> ion ion-md-code-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-code-working"></i> ion ion-md-code-working
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cog"></i> ion ion-md-cog
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-color-fill"></i> ion ion-md-color-fill
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-color-filter"></i> ion ion-md-color-filter
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-color-palette"></i> ion ion-md-color-palette
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-color-wand"></i> ion ion-md-color-wand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-compass"></i> ion ion-md-compass
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-construct"></i> ion ion-md-construct
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-contact"></i> ion ion-md-contact
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-contacts"></i> ion ion-md-contacts
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-contract"></i> ion ion-md-contract
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-contrast"></i> ion ion-md-contrast
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-copy"></i> ion ion-md-copy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-create"></i> ion ion-md-create
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-crop"></i> ion ion-md-crop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cube"></i> ion ion-md-cube
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-cut"></i> ion ion-md-cut
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-desktop"></i> ion ion-md-desktop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-disc"></i> ion ion-md-disc
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-document"></i> ion ion-md-document
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-done-all"></i> ion ion-md-done-all
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-download"></i> ion ion-md-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-easel"></i> ion ion-md-easel
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-egg"></i> ion ion-md-egg
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-exit"></i> ion ion-md-exit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-expand"></i> ion ion-md-expand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-eye"></i> ion ion-md-eye
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-eye-off"></i> ion ion-md-eye-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-fastforward"></i> ion ion-md-fastforward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-female"></i> ion ion-md-female
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-filing"></i> ion ion-md-filing
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-film"></i> ion ion-md-film
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-finger-print"></i> ion ion-md-finger-print
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-fitness"></i> ion ion-md-fitness
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flag"></i> ion ion-md-flag
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flame"></i> ion ion-md-flame
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flash"></i> ion ion-md-flash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flash-off"></i> ion ion-md-flash-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flashlight"></i> ion ion-md-flashlight
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flask"></i> ion ion-md-flask
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-flower"></i> ion ion-md-flower
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-folder"></i> ion ion-md-folder
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-folder-open"></i> ion ion-md-folder-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-football"></i> ion ion-md-football
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-funnel"></i> ion ion-md-funnel
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-gift"></i> ion ion-md-gift
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-branch"></i> ion ion-md-git-branch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-commit"></i> ion ion-md-git-commit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-compare"></i> ion ion-md-git-compare
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-merge"></i> ion ion-md-git-merge
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-network"></i> ion ion-md-git-network
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-git-pull-request"></i> ion ion-md-git-pull-request
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-glasses"></i> ion ion-md-glasses
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-globe"></i> ion ion-md-globe
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-grid"></i> ion ion-md-grid
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-hammer"></i> ion ion-md-hammer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-hand"></i> ion ion-md-hand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-happy"></i> ion ion-md-happy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-headset"></i> ion ion-md-headset
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-heart"></i> ion ion-md-heart
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-heart-dislike"></i> ion ion-md-heart-dislike
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-heart-empty"></i> ion ion-md-heart-empty
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-heart-half"></i> ion ion-md-heart-half
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-help"></i> ion ion-md-help
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-help-buoy"></i> ion ion-md-help-buoy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-help-circle"></i> ion ion-md-help-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-help-circle-outline"></i> ion ion-md-help-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-home"></i> ion ion-md-home
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-hourglass"></i> ion ion-md-hourglass
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-ice-cream"></i> ion ion-md-ice-cream
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-image"></i> ion ion-md-image
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-images"></i> ion ion-md-images
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-infinite"></i> ion ion-md-infinite
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-information"></i> ion ion-md-information
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-information-circle"></i> ion ion-md-information-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-information-circle-outline"></i> ion ion-md-information-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-jet"></i> ion ion-md-jet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-journal"></i> ion ion-md-journal
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-key"></i> ion ion-md-key
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-keypad"></i> ion ion-md-keypad
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-laptop"></i> ion ion-md-laptop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-leaf"></i> ion ion-md-leaf
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-link"></i> ion ion-md-link
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-list"></i> ion ion-md-list
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-list-box"></i> ion ion-md-list-box
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-locate"></i> ion ion-md-locate
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-lock"></i> ion ion-md-lock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-log-in"></i> ion ion-md-log-in
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-log-out"></i> ion ion-md-log-out
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-magnet"></i> ion ion-md-magnet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-mail"></i> ion ion-md-mail
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-mail-open"></i> ion ion-md-mail-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-mail-unread"></i> ion ion-md-mail-unread
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-male"></i> ion ion-md-male
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-man"></i> ion ion-md-man
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-map"></i> ion ion-md-map
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-medal"></i> ion ion-md-medal
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-medical"></i> ion ion-md-medical
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-medkit"></i> ion ion-md-medkit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-megaphone"></i> ion ion-md-megaphone
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-menu"></i> ion ion-md-menu
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-mic"></i> ion ion-md-mic
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-mic-off"></i> ion ion-md-mic-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-microphone"></i> ion ion-md-microphone
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-moon"></i> ion ion-md-moon
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-more"></i> ion ion-md-more
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-move"></i> ion ion-md-move
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-musical-note"></i> ion ion-md-musical-note
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-musical-notes"></i> ion ion-md-musical-notes
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-navigate"></i> ion ion-md-navigate
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-notifications"></i> ion ion-md-notifications
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-notifications-off"></i> ion ion-md-notifications-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-notifications-outline"></i> ion ion-md-notifications-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-nuclear"></i> ion ion-md-nuclear
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-nutrition"></i> ion ion-md-nutrition
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-open"></i> ion ion-md-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-options"></i> ion ion-md-options
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-outlet"></i> ion ion-md-outlet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-paper"></i> ion ion-md-paper
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-paper-plane"></i> ion ion-md-paper-plane
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-partly-sunny"></i> ion ion-md-partly-sunny
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pause"></i> ion ion-md-pause
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-paw"></i> ion ion-md-paw
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-people"></i> ion ion-md-people
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-person"></i> ion ion-md-person
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-person-add"></i> ion ion-md-person-add
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-phone-landscape"></i> ion ion-md-phone-landscape
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-phone-portrait"></i> ion ion-md-phone-portrait
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-photos"></i> ion ion-md-photos
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pie"></i> ion ion-md-pie
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pin"></i> ion ion-md-pin
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pint"></i> ion ion-md-pint
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pizza"></i> ion ion-md-pizza
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-planet"></i> ion ion-md-planet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-play"></i> ion ion-md-play
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-play-circle"></i> ion ion-md-play-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-podium"></i> ion ion-md-podium
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-power"></i> ion ion-md-power
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pricetag"></i> ion ion-md-pricetag
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pricetags"></i> ion ion-md-pricetags
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-print"></i> ion ion-md-print
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-pulse"></i> ion ion-md-pulse
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-qr-scanner"></i> ion ion-md-qr-scanner
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-quote"></i> ion ion-md-quote
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-radio"></i> ion ion-md-radio
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-radio-button-off"></i> ion ion-md-radio-button-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-radio-button-on"></i> ion ion-md-radio-button-on
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-rainy"></i> ion ion-md-rainy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-recording"></i> ion ion-md-recording
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-redo"></i> ion ion-md-redo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-refresh"></i> ion ion-md-refresh
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-refresh-circle"></i> ion ion-md-refresh-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-remove"></i> ion ion-md-remove
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-remove-circle"></i> ion ion-md-remove-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-remove-circle-outline"></i> ion ion-md-remove-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-reorder"></i> ion ion-md-reorder
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-repeat"></i> ion ion-md-repeat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-resize"></i> ion ion-md-resize
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-restaurant"></i> ion ion-md-restaurant
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-return-left"></i> ion ion-md-return-left
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-return-right"></i> ion ion-md-return-right
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-reverse-camera"></i> ion ion-md-reverse-camera
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-rewind"></i> ion ion-md-rewind
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-ribbon"></i> ion ion-md-ribbon
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-rocket"></i> ion ion-md-rocket
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-rose"></i> ion ion-md-rose
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-sad"></i> ion ion-md-sad
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-save"></i> ion ion-md-save
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-school"></i> ion ion-md-school
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-search"></i> ion ion-md-search
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-send"></i> ion ion-md-send
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-settings"></i> ion ion-md-settings
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-share"></i> ion ion-md-share
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-share-alt"></i> ion ion-md-share-alt
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-shirt"></i> ion ion-md-shirt
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-shuffle"></i> ion ion-md-shuffle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-skip-backward"></i> ion ion-md-skip-backward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-skip-forward"></i> ion ion-md-skip-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-snow"></i> ion ion-md-snow
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-speedometer"></i> ion ion-md-speedometer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-square"></i> ion ion-md-square
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-square-outline"></i> ion ion-md-square-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-star"></i> ion ion-md-star
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-star-half"></i> ion ion-md-star-half
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-star-outline"></i> ion ion-md-star-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-stats"></i> ion ion-md-stats
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-stopwatch"></i> ion ion-md-stopwatch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-subway"></i> ion ion-md-subway
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-sunny"></i> ion ion-md-sunny
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-swap"></i> ion ion-md-swap
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-switch"></i> ion ion-md-switch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-sync"></i> ion ion-md-sync
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-tablet-landscape"></i> ion ion-md-tablet-landscape
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-tablet-portrait"></i> ion ion-md-tablet-portrait
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-tennisball"></i> ion ion-md-tennisball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-text"></i> ion ion-md-text
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-thermometer"></i> ion ion-md-thermometer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-thumbs-down"></i> ion ion-md-thumbs-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-thumbs-up"></i> ion ion-md-thumbs-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-thunderstorm"></i> ion ion-md-thunderstorm
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-time"></i> ion ion-md-time
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-timer"></i> ion ion-md-timer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-today"></i> ion ion-md-today
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-train"></i> ion ion-md-train
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-transgender"></i> ion ion-md-transgender
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-trash"></i> ion ion-md-trash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-trending-down"></i> ion ion-md-trending-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-trending-up"></i> ion ion-md-trending-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-trophy"></i> ion ion-md-trophy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-tv"></i> ion ion-md-tv
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-umbrella"></i> ion ion-md-umbrella
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-undo"></i> ion ion-md-undo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-unlock"></i> ion ion-md-unlock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-videocam"></i> ion ion-md-videocam
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-volume-high"></i> ion ion-md-volume-high
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-volume-low"></i> ion ion-md-volume-low
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-volume-mute"></i> ion ion-md-volume-mute
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-volume-off"></i> ion ion-md-volume-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-walk"></i> ion ion-md-walk
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-wallet"></i> ion ion-md-wallet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-warning"></i> ion ion-md-warning
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-watch"></i> ion ion-md-watch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-water"></i> ion ion-md-water
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-wifi"></i> ion ion-md-wifi
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-wine"></i> ion ion-md-wine
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-md-woman"></i> ion ion-md-woman
                                            </Col>

              </Row>

            </CardBody>


            <div className="card-body">

              <h4 className="card-title mb-4">IOS</h4>

              <div className="row icon-demo-content">
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-add"></i> ion ion-ios-add
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-add-circle"></i> ion ion-ios-add-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-add-circle-outline"></i> ion ion-ios-add-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-airplane"></i> ion ion-ios-airplane
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-alarm"></i> ion ion-ios-alarm
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-albums"></i> ion ion-ios-albums
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-alert"></i> ion ion-ios-alert
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-american-football"></i> ion ion-ios-american-football
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-analytics"></i> ion ion-ios-analytics
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-aperture"></i> ion ion-ios-aperture
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-apps"></i> ion ion-ios-apps
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-appstore"></i> ion ion-ios-appstore
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-archive"></i> ion ion-ios-archive
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-back"></i> ion ion-ios-arrow-back
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-down"></i> ion ion-ios-arrow-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropdown"></i> ion ion-ios-arrow-dropdown
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropdown-circle"></i> ion ion-ios-arrow-dropdown-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropleft"></i> ion ion-ios-arrow-dropleft
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropleft-circle"></i> ion ion-ios-arrow-dropleft-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropright"></i> ion ion-ios-arrow-dropright
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropright-circle"></i> ion ion-ios-arrow-dropright-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropup"></i> ion ion-ios-arrow-dropup
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-dropup-circle"></i> ion ion-ios-arrow-dropup-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-forward"></i> ion ion-ios-arrow-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-round-back"></i> ion ion-ios-arrow-round-back
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-round-down"></i> ion ion-ios-arrow-round-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-round-forward"></i> ion ion-ios-arrow-round-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-round-up"></i> ion ion-ios-arrow-round-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-arrow-up"></i> ion ion-ios-arrow-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-at"></i> ion ion-ios-at
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-attach"></i> ion ion-ios-attach
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-backspace"></i> ion ion-ios-backspace
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-barcode"></i> ion ion-ios-barcode
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-baseball"></i> ion ion-ios-baseball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-basket"></i> ion ion-ios-basket
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-basketball"></i> ion ion-ios-basketball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-battery-charging"></i> ion ion-ios-battery-charging
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-battery-dead"></i> ion ion-ios-battery-dead
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-battery-full"></i> ion ion-ios-battery-full
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-beaker"></i> ion ion-ios-beaker
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bed"></i> ion ion-ios-bed
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-beer"></i> ion ion-ios-beer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bicycle"></i> ion ion-ios-bicycle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bluetooth"></i> ion ion-ios-bluetooth
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-boat"></i> ion ion-ios-boat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-body"></i> ion ion-ios-body
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bonfire"></i> ion ion-ios-bonfire
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-book"></i> ion ion-ios-book
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bookmark"></i> ion ion-ios-bookmark
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bookmarks"></i> ion ion-ios-bookmarks
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bowtie"></i> ion ion-ios-bowtie
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-briefcase"></i> ion ion-ios-briefcase
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-browsers"></i> ion ion-ios-browsers
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-brush"></i> ion ion-ios-brush
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bug"></i> ion ion-ios-bug
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-build"></i> ion ion-ios-build
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bulb"></i> ion ion-ios-bulb
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-bus"></i> ion ion-ios-bus
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-business"></i> ion ion-ios-business
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cafe"></i> ion ion-ios-cafe
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-calculator"></i> ion ion-ios-calculator
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-calendar"></i> ion ion-ios-calendar
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-call"></i> ion ion-ios-call
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-camera"></i> ion ion-ios-camera
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-car"></i> ion ion-ios-car
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-card"></i> ion ion-ios-card
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cart"></i> ion ion-ios-cart
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cash"></i> ion ion-ios-cash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cellular"></i> ion ion-ios-cellular
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-chatboxes"></i> ion ion-ios-chatboxes
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-chatbubbles"></i> ion ion-ios-chatbubbles
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-checkbox"></i> ion ion-ios-checkbox
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-checkbox-outline"></i> ion ion-ios-checkbox-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-checkmark"></i> ion ion-ios-checkmark
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-checkmark-circle"></i> ion ion-ios-checkmark-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-checkmark-circle-outline"></i> ion ion-ios-checkmark-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-clipboard"></i> ion ion-ios-clipboard
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-clock"></i> ion ion-ios-clock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-close"></i> ion ion-ios-close
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-close-circle"></i> ion ion-ios-close-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-close-circle-outline"></i> ion ion-ios-close-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud"></i> ion ion-ios-cloud
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud-circle"></i> ion ion-ios-cloud-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud-done"></i> ion ion-ios-cloud-done
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud-download"></i> ion ion-ios-cloud-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud-outline"></i> ion ion-ios-cloud-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloud-upload"></i> ion ion-ios-cloud-upload
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloudy"></i> ion ion-ios-cloudy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cloudy-night"></i> ion ion-ios-cloudy-night
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-code"></i> ion ion-ios-code
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-code-download"></i> ion ion-ios-code-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-code-working"></i> ion ion-ios-code-working
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cog"></i> ion ion-ios-cog
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-color-fill"></i> ion ion-ios-color-fill
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-color-filter"></i> ion ion-ios-color-filter
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-color-palette"></i> ion ion-ios-color-palette
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-color-wand"></i> ion ion-ios-color-wand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-compass"></i> ion ion-ios-compass
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-construct"></i> ion ion-ios-construct
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-contact"></i> ion ion-ios-contact
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-contacts"></i> ion ion-ios-contacts
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-contract"></i> ion ion-ios-contract
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-contrast"></i> ion ion-ios-contrast
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-copy"></i> ion ion-ios-copy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-create"></i> ion ion-ios-create
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-crop"></i> ion ion-ios-crop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cube"></i> ion ion-ios-cube
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-cut"></i> ion ion-ios-cut
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-desktop"></i> ion ion-ios-desktop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-disc"></i> ion ion-ios-disc
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-document"></i> ion ion-ios-document
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-done-all"></i> ion ion-ios-done-all
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-download"></i> ion ion-ios-download
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-easel"></i> ion ion-ios-easel
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-egg"></i> ion ion-ios-egg
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-exit"></i> ion ion-ios-exit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-expand"></i> ion ion-ios-expand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-eye"></i> ion ion-ios-eye
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-eye-off"></i> ion ion-ios-eye-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-fastforward"></i> ion ion-ios-fastforward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-female"></i> ion ion-ios-female
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-filing"></i> ion ion-ios-filing
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-film"></i> ion ion-ios-film
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-finger-print"></i> ion ion-ios-finger-print
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-fitness"></i> ion ion-ios-fitness
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flag"></i> ion ion-ios-flag
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flame"></i> ion ion-ios-flame
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flash"></i> ion ion-ios-flash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flash-off"></i> ion ion-ios-flash-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flashlight"></i> ion ion-ios-flashlight
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flask"></i> ion ion-ios-flask
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-flower"></i> ion ion-ios-flower
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-folder"></i> ion ion-ios-folder
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-folder-open"></i> ion ion-ios-folder-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-football"></i> ion ion-ios-football
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-funnel"></i> ion ion-ios-funnel
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-gift"></i> ion ion-ios-gift
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-branch"></i> ion ion-ios-git-branch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-commit"></i> ion ion-ios-git-commit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-compare"></i> ion ion-ios-git-compare
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-merge"></i> ion ion-ios-git-merge
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-network"></i> ion ion-ios-git-network
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-git-pull-request"></i> ion ion-ios-git-pull-request
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-glasses"></i> ion ion-ios-glasses
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-globe"></i> ion ion-ios-globe
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-grid"></i> ion ion-ios-grid
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-hammer"></i> ion ion-ios-hammer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-hand"></i> ion ion-ios-hand
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-happy"></i> ion ion-ios-happy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-headset"></i> ion ion-ios-headset
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-heart"></i> ion ion-ios-heart
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-heart-dislike"></i> ion ion-ios-heart-dislike
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-heart-empty"></i> ion ion-ios-heart-empty
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-heart-half"></i> ion ion-ios-heart-half
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-help"></i> ion ion-ios-help
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-help-buoy"></i> ion ion-ios-help-buoy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-help-circle"></i> ion ion-ios-help-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-help-circle-outline"></i> ion ion-ios-help-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-home"></i> ion ion-ios-home
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-hourglass"></i> ion ion-ios-hourglass
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-ice-cream"></i> ion ion-ios-ice-cream
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-image"></i> ion ion-ios-image
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-images"></i> ion ion-ios-images
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-infinite"></i> ion ion-ios-infinite
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-information"></i> ion ion-ios-information
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-information-circle"></i> ion ion-ios-information-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-information-circle-outline"></i> ion ion-ios-information-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-jet"></i> ion ion-ios-jet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-journal"></i> ion ion-ios-journal
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-key"></i> ion ion-ios-key
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-keypad"></i> ion ion-ios-keypad
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-laptop"></i> ion ion-ios-laptop
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-leaf"></i> ion ion-ios-leaf
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-link"></i> ion ion-ios-link
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-list"></i> ion ion-ios-list
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-list-box"></i> ion ion-ios-list-box
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-locate"></i> ion ion-ios-locate
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-lock"></i> ion ion-ios-lock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-log-in"></i> ion ion-ios-log-in
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-log-out"></i> ion ion-ios-log-out
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-magnet"></i> ion ion-ios-magnet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-mail"></i> ion ion-ios-mail
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-mail-open"></i> ion ion-ios-mail-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-mail-unread"></i> ion ion-ios-mail-unread
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-male"></i> ion ion-ios-male
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-man"></i> ion ion-ios-man
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-map"></i> ion ion-ios-map
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-medal"></i> ion ion-ios-medal
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-medical"></i> ion ion-ios-medical
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-medkit"></i> ion ion-ios-medkit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-megaphone"></i> ion ion-ios-megaphone
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-menu"></i> ion ion-ios-menu
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-mic"></i> ion ion-ios-mic
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-mic-off"></i> ion ion-ios-mic-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-microphone"></i> ion ion-ios-microphone
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-moon"></i> ion ion-ios-moon
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-more"></i> ion ion-ios-more
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-move"></i> ion ion-ios-move
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-musical-note"></i> ion ion-ios-musical-note
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-musical-notes"></i> ion ion-ios-musical-notes
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-navigate"></i> ion ion-ios-navigate
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-notifications"></i> ion ion-ios-notifications
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-notifications-off"></i> ion ion-ios-notifications-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-notifications-outline"></i> ion ion-ios-notifications-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-nuclear"></i> ion ion-ios-nuclear
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-nutrition"></i> ion ion-ios-nutrition
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-open"></i> ion ion-ios-open
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-options"></i> ion ion-ios-options
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-outlet"></i> ion ion-ios-outlet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-paper"></i> ion ion-ios-paper
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-paper-plane"></i> ion ion-ios-paper-plane
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-partly-sunny"></i> ion ion-ios-partly-sunny
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pause"></i> ion ion-ios-pause
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-paw"></i> ion ion-ios-paw
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-people"></i> ion ion-ios-people
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-person"></i> ion ion-ios-person
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-person-add"></i> ion ion-ios-person-add
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-phone-landscape"></i> ion ion-ios-phone-landscape
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-phone-portrait"></i> ion ion-ios-phone-portrait
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-photos"></i> ion ion-ios-photos
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pie"></i> ion ion-ios-pie
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pin"></i> ion ion-ios-pin
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pint"></i> ion ion-ios-pint
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pizza"></i> ion ion-ios-pizza
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-planet"></i> ion ion-ios-planet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-play"></i> ion ion-ios-play
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-play-circle"></i> ion ion-ios-play-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-podium"></i> ion ion-ios-podium
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-power"></i> ion ion-ios-power
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pricetag"></i> ion ion-ios-pricetag
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pricetags"></i> ion ion-ios-pricetags
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-print"></i> ion ion-ios-print
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-pulse"></i> ion ion-ios-pulse
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-qr-scanner"></i> ion ion-ios-qr-scanner
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-quote"></i> ion ion-ios-quote
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-radio"></i> ion ion-ios-radio
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-radio-button-off"></i> ion ion-ios-radio-button-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-radio-button-on"></i> ion ion-ios-radio-button-on
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-rainy"></i> ion ion-ios-rainy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-recording"></i> ion ion-ios-recording
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-redo"></i> ion ion-ios-redo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-refresh"></i> ion ion-ios-refresh
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-refresh-circle"></i> ion ion-ios-refresh-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-remove"></i> ion ion-ios-remove
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-remove-circle"></i> ion ion-ios-remove-circle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-remove-circle-outline"></i> ion ion-ios-remove-circle-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-reorder"></i> ion ion-ios-reorder
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-repeat"></i> ion ion-ios-repeat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-resize"></i> ion ion-ios-resize
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-restaurant"></i> ion ion-ios-restaurant
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-return-left"></i> ion ion-ios-return-left
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-return-right"></i> ion ion-ios-return-right
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-reverse-camera"></i> ion ion-ios-reverse-camera
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-rewind"></i> ion ion-ios-rewind
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-ribbon"></i> ion ion-ios-ribbon
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-rocket"></i> ion ion-ios-rocket
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-rose"></i> ion ion-ios-rose
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-sad"></i> ion ion-ios-sad
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-save"></i> ion ion-ios-save
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-school"></i> ion ion-ios-school
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-search"></i> ion ion-ios-search
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-send"></i> ion ion-ios-send
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-settings"></i> ion ion-ios-settings
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-share"></i> ion ion-ios-share
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-share-alt"></i> ion ion-ios-share-alt
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-shirt"></i> ion ion-ios-shirt
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-shuffle"></i> ion ion-ios-shuffle
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-skip-backward"></i> ion ion-ios-skip-backward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-skip-forward"></i> ion ion-ios-skip-forward
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-snow"></i> ion ion-ios-snow
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-speedometer"></i> ion ion-ios-speedometer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-square"></i> ion ion-ios-square
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-square-outline"></i> ion ion-ios-square-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-star"></i> ion ion-ios-star
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-star-half"></i> ion ion-ios-star-half
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-star-outline"></i> ion ion-ios-star-outline
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-stats"></i> ion ion-ios-stats
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-stopwatch"></i> ion ion-ios-stopwatch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-subway"></i> ion ion-ios-subway
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-sunny"></i> ion ion-ios-sunny
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-swap"></i> ion ion-ios-swap
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-switch"></i> ion ion-ios-switch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-sync"></i> ion ion-ios-sync
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-tablet-landscape"></i> ion ion-ios-tablet-landscape
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-tablet-portrait"></i> ion ion-ios-tablet-portrait
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-tennisball"></i> ion ion-ios-tennisball
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-text"></i> ion ion-ios-text
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-thermometer"></i> ion ion-ios-thermometer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-thumbs-down"></i> ion ion-ios-thumbs-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-thumbs-up"></i> ion ion-ios-thumbs-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-thunderstorm"></i> ion ion-ios-thunderstorm
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-time"></i> ion ion-ios-time
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-timer"></i> ion ion-ios-timer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-today"></i> ion ion-ios-today
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-train"></i> ion ion-ios-train
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-transgender"></i> ion ion-ios-transgender
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-trash"></i> ion ion-ios-trash
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-trending-down"></i> ion ion-ios-trending-down
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-trending-up"></i> ion ion-ios-trending-up
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-trophy"></i> ion ion-ios-trophy
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-tv"></i> ion ion-ios-tv
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-umbrella"></i> ion ion-ios-umbrella
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-undo"></i> ion ion-ios-undo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-unlock"></i> ion ion-ios-unlock
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-videocam"></i> ion ion-ios-videocam
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-volume-high"></i> ion ion-ios-volume-high
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-volume-low"></i> ion ion-ios-volume-low
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-volume-mute"></i> ion ion-ios-volume-mute
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-volume-off"></i> ion ion-ios-volume-off
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-walk"></i> ion ion-ios-walk
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-wallet"></i> ion ion-ios-wallet
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-warning"></i> ion ion-ios-warning
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-watch"></i> ion ion-ios-watch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-water"></i> ion ion-ios-water
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-wifi"></i> ion ion-ios-wifi
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-wine"></i> ion ion-ios-wine
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-ios-woman"></i> ion ion-ios-woman
                                            </Col>

              </div>

            </div>


            <div className="card-body">
              <h4 className="card-title mb-4">Logo</h4>

              <div className="row icon-demo-content">
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-android"></i> ion ion-logo-android
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-angular"></i> ion ion-logo-angular
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-apple"></i> ion ion-logo-apple
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-bitbucket"></i> ion ion-logo-bitbucket
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-bitcoin"></i> ion ion-logo-bitcoin
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-buffer"></i> ion ion-logo-buffer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-chrome"></i> ion ion-logo-chrome
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-closed-captioning"></i> ion ion-logo-closed-captioning
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-codepen"></i> ion ion-logo-codepen
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-css3"></i> ion ion-logo-css3
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-designernews"></i> ion ion-logo-designernews
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-dribbble"></i> ion ion-logo-dribbble
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-dropbox"></i> ion ion-logo-dropbox
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-euro"></i> ion ion-logo-euro
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-facebook"></i> ion ion-logo-facebook
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-flickr"></i> ion ion-logo-flickr
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-foursquare"></i> ion ion-logo-foursquare
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-freebsd-devil"></i> ion ion-logo-freebsd-devil
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-game-controller-a"></i> ion ion-logo-game-controller-a
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-game-controller-b"></i> ion ion-logo-game-controller-b
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-github"></i> ion ion-logo-github
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-google"></i> ion ion-logo-google
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-googleplus"></i> ion ion-logo-googleplus
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-hackernews"></i> ion ion-logo-hackernews
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-html5"></i> ion ion-logo-html5
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-instagram"></i> ion ion-logo-instagram
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-ionic"></i> ion ion-logo-ionic
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-ionitron"></i> ion ion-logo-ionitron
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-javascript"></i> ion ion-logo-javascript
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-linkedin"></i> ion ion-logo-linkedin
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-markdown"></i> ion ion-logo-markdown
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-model-s"></i> ion ion-logo-model-s
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-no-smoking"></i> ion ion-logo-no-smoking
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-nodejs"></i> ion ion-logo-nodejs
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-npm"></i> ion ion-logo-npm
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-octocat"></i> ion ion-logo-octocat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-pinterest"></i> ion ion-logo-pinterest
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-playstation"></i> ion ion-logo-playstation
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-polymer"></i> ion ion-logo-polymer
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-python"></i> ion ion-logo-python
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-reddit"></i> ion ion-logo-reddit
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-rss"></i> ion ion-logo-rss
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-sass"></i> ion ion-logo-sass
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-skype"></i> ion ion-logo-skype
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-slack"></i> ion ion-logo-slack
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-snapchat"></i> ion ion-logo-snapchat
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-steam"></i> ion ion-logo-steam
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-tumblr"></i> ion ion-logo-tumblr
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-tux"></i> ion ion-logo-tux
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-twitch"></i> ion ion-logo-twitch
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-twitter"></i> ion ion-logo-twitter
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-usd"></i> ion ion-logo-usd
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-vimeo"></i> ion ion-logo-vimeo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-vk"></i> ion ion-logo-vk
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-whatsapp"></i> ion ion-logo-whatsapp
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-windows"></i> ion ion-logo-windows
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-wordpress"></i> ion ion-logo-wordpress
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-xbox"></i> ion ion-logo-xbox
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-xing"></i> ion ion-logo-xing
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-yahoo"></i> ion ion-logo-yahoo
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-yen"></i> ion ion-logo-yen
                                            </Col>
                <Col xl={3} lg={4} sm={6}>
                  <i className="ion ion-logo-youtube"></i> ion ion-logo-youtube
                                            </Col>

              </div>
            </div>
          </Card>
        </Col>

      </Row>

    </React.Fragment>
  );
}

export default connect(null, { setBreadcrumbItems })(IconIon);