import React from 'react';
import { Layout } from '../../templates/Layout/Layout';
import { Text, useTheme, ListItem, List, Heading } from '@chakra-ui/core';
import { Section } from '../../organisms/Section/Section';
import { Menu } from '../../models/menu';
import { Number } from '../../atoms/Number/Number.component';
import Image from 'next/image';
const specialMenu: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: '生ビール(イベント価格)',
    price: 500,
  },
  {
    name: 'バースデーゆきのShakeカクテル -Happiness',
    price: 800,
  },
  {
    name: 'ポン酢サワー',
    price: 500,
  },
  {
    name: 'ちんちろ角ハイ - Drink!\nゾロ目一杯無料！\n偶数 半額！\n奇数二杯お買い上げ！',
    price: 500,
  },
  {
    name: 'ちんちろ角ハイ - Challenge!\nゾロ目二杯無料！\n偶数店員に一杯奢る！\n奇数お客さんに一杯奢る！',
    price: 500,
  },
  {
    name: 'みっくちゅじゅーちゅハイ',
    price: 500,
  },
  {
    name: 'チャミスル',
    price: 800,
  },
  {
    name: 'クライナー',
    price: 500,
  },
];

const craft: Pick<Menu, 'name' | 'price'>[] = [
    {
      name: '六甲ビール',
      price: 1000,
    },
    {
      name:
        '箕面ビール\n - おさるIPA\n - IPA\n - ピルスナー',
      price: 1000,
    },
    {
      name: 'マサハイ(マサシオススメハイボール)',
      price: 700,
    },
    {
      name: '櫻政宗 1合',
      price: 700,
    },
  ];

const grandMenu: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: 'レモンサワー',
    price: 500,
  },
  {
    name: '翠ソーダ',
    price: 500,
  },
  {
    name: '大倉山梅酒',
    price: 500,
  },
  {
    name: 'レモネード梅酒',
    price: 500,
  },
  {
    name: '塩レモン梅酒',
    price: 500,
  },
];


const DrinkMenuPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Heading textAlign="center" marginTop={theme.space[8]}>
        Drink Menu
      </Heading>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/59075570/37c6bc09-9243-421b-887c-6db02035fbca.vibe.jpg',
          alt: 'Event Menu',
        }}
        title="Event Menu"
      >
        <List>
          {specialMenu.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[500]}` : undefined}
            >
              <Text
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
              >
                {item.name}
              </Text>
              <Text marginLeft={theme.space[1]}>
                ￥<Number>{item.price}</Number>
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/58316886/f97fd8ab-f945-423c-b8c0-af6e550bf194.jpg',
          alt: 'Grand Menu',
        }}
        title="Masashi Premium Select"
        reverse
      >
        <List>
          {craft.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[100]}` : undefined}
            >
              <Text
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
                color={theme.colors.white}
              >
                {item.name}
              </Text>
              <Text color={theme.colors.white} marginLeft={theme.space[1]}>
                ￥<Number>{item.price}</Number>
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section
        image={{
          url: "https://lh3.googleusercontent.com/pw/AP1GczPnEsfJGIdmXk6gOFjn7XiQ1YlRWk4jeohm99ERXNE3_WRnNA3jK8suko0ZB2TmRaBLpzo2lPL8yrwCxynsuskoPkDqkotf5VLT2ps6DaHgwyYbpRXhN1W5nPgUBlEJmYP2TJk5-R6spZqIkyIo6Sq62A=w1071-h1904-s-no-gm?authuser=0",
          alt: 'GrandMenu',
        }}
        title="Grand Menu"
      >
        <List>
          {grandMenu.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[500]}` : undefined}
            >
              <Text
                whiteSpace="pre-wrap"
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
              >
                {item.name}
              </Text>
              <Text marginLeft={theme.space[1]}>￥{item.price}</Text>
            </ListItem>
          ))}
        </List>
      </Section>
    </Layout>
  );
};

export default DrinkMenuPage;
