import {Typography, Space, Card, Tag} from "antd";

import {getRandomInt} from "../utils/math";

const {Text, Link} = Typography;

import Image from "next/image";
import {StaticImageData} from "next/image";

import styles from "./Card.module.css";

const {Meta} = Card;

type Props = {
  coverImage?: StaticImageData;
  title?: string;
  date?: string;
  location?: string;
  slug: number;
};

const categories = [
  {label: "Musica", color: "magenta"},
  {label: "Poesia", color: "red"},
  {label: "Teatro", color: "blue"},
  {label: "Arte", color: "lime"},
  {label: "Fotografia", color: "volcano"},
];

const CardComponent = ({coverImage, title, date, location, slug}: Props) => {
  // Shuffle array
  const shuffled = categories.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, getRandomInt(0, categories.length));

  return (
    <Card cover={coverImage && <img alt={title} src={coverImage.src} />}>
      <div className={styles.additional}>
        <Text type="success">{date}</Text>
      </div>
      <Typography.Title level={3} style={{margin: 0}}>
        {title}
      </Typography.Title>
      <div className={styles.additional}>
        <Text type="secondary">{location}</Text>
      </div>
      <Space />
      <div>
        {selected.map((e) => (
          <Tag key={e.label} color={e.color}>
            {e.label}
          </Tag>
        ))}
      </div>
    </Card>
  );
};

export default CardComponent;
