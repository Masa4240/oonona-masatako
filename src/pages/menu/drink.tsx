import React from 'react';
import { Layout } from '../../templates/Layout/Layout';
import { Text, useTheme, ListItem, List, Heading } from '@chakra-ui/core';
import { Section } from '../../organisms/Section/Section';
import { Menu } from '../../models/menu';
import { Number } from '../../atoms/Number/Number.component';

const specialMenu: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: '生ビール(イベント価格)',
    price: 500,
  },
  {
    name: 'バースデーゆきのShakeカクテル -Happiness',
    price: 500,
  },
  {
    name: '大阪クラフトビール',
    price: 700,
  },
  {
    name: 'ポン酢サワー',
    price: 500,
  },
  {
    name: 'ちんちろ角ハイ - Drink!',
    price: 500,
  },
  {
    name: 'ちんちろ角ハイ - Challenge!',
    price: 600,
  },
  {
    name: 'みっくちゅじゅーちゅハイ',
    price: 500,
  },
  {
    name: 'チャミスル',
    price: 500,
  },
  {
    name: 'クライナー',
    price: 500,
  },
  {
    name: 'マサハイ(マサシオススメハイボール)',
    price: 700,
  },
];

const craft: Pick<Menu, 'name' | 'price'>[] = [
    {
      name: '箕面ビール',
      price: 1200,
    },
    {
      name: 'いきがり',
      price: 2400,
    },
    {
      name:
        '箕面ビール\n - おさるIPA\n - IPA\n - ピルスナー',
      price: 1800,
    },
  ];

const grandMenu: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: 'こだまレモンサワー',
    price: 500,
  },
  {
    name: 'なか',
    price: 300,
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


const ALaCarteMenuPage = () => {
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
        title="Craft Beer"
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
          url: 'https://jimdo-storage.freetls.fastly.net/image/58957463/f6319d71-ecad-4028-8acd-0c66e91ccdea.vibe.jpg',
          alt: 'パスタ',
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
      {/*<Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/71576938/7b68b3f9-98ad-41a0-9548-6c898ddbdb43.jpg',
          alt: 'メイン',
        }}
        title="メイン"
        reverse
      >
        <List>
          {mains.map((item, i) => (
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
      </Section> */}
    </Layout>
  );
};

export default ALaCarteMenuPage;
