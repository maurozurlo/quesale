import React from "react";
import {Col, Row} from "antd";

import demo1 from "../public/demo_1.jpg";
import demo2 from "../public/demo_2.jpg";
import demo3 from "../public/demo_3.jpg";
import demo4 from "../public/demo_4.jpg";
import demo5 from "../public/demo_5.jpg";
import demo6 from "../public/demo_6.jpg";
import demo7 from "../public/demo_7.jpg";
import demo8 from "../public/demo_8.jpg";

import Card from "./Card";

type Props = {};

const events = [
  {
    coverImage: demo1,
    title: "EL CIRCUITO ESPACIO ESCENICO",
    date: "JUE · MAY 5 · 7:30 PM",
    location: "Sarmiento 3096",
    slug: 2,
  },
  {
    coverImage: demo5,
    title: "Feria del libro",
    date: "JUE · MAY 5 · 5:00 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 3,
  },
  {
    coverImage: demo3,
    title: "Que Open Mic De Miercoles",
    date: "VIE · OCT 28 · 7:30 PM",
    location: "Av. Del congreso 3834 entre Estomba y Naon",
    slug: 4,
  },
  {
    coverImage: demo4,
    title: "Make Art Not War",
    date: "FRI · OCT 28 · 7:30 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 5,
  },
  {
    coverImage: demo2,
    title: "Daniel Howell: We're All Doomed!",
    date: "FRI · OCT 28 · 7:30 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 6,
  },
  {
    coverImage: demo6,
    title: "Daniel Howell: We're All Doomed!",
    date: "FRI · OCT 28 · 7:30 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 7,
  },
  {
    coverImage: demo7,
    title: "Daniel Howell: We're All Doomed!",
    date: "FRI · OCT 28 · 7:30 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 8,
  },
  {
    coverImage: demo8,
    title: "Daniel Howell: We're All Doomed!",
    date: "FRI · OCT 28 · 7:30 PM",
    location: "Orlando, FL · Hard Rock Live Orlando",
    slug: 9,
  },
];

export default function EventGallery({}: Props) {
  return (
    <Row gutter={[8, 8]}>
      {events.map((e) => {
        return (
          <Col key={e.slug} md={6} sm={1}>
            <Card
              coverImage={e.coverImage}
              date={e.date}
              location={e.location}
              slug={e.slug}
              title={e.title}
            />
          </Col>
        );
      })}
    </Row>
  );
}
