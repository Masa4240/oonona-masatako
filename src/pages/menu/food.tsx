import React from 'react';
import { Layout } from '../../templates/Layout/Layout';
import { Text, useTheme, ListItem, List, Heading } from '@chakra-ui/core';
import { Section } from '../../organisms/Section/Section';
import { Menu } from '../../models/menu';
import { Number } from '../../atoms/Number/Number.component';

const food: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: 'セルフたこ焼き - 一回分',
    price: 1000,
  },
  {
    name: 'できてるたこ焼き - 6個',
    price: 500,
  },
  {
    name: 'たこせん',
    price: 200,
  },
  {
    name: 'たこ焼きだし茶漬け',
    price: 500,
  },
  {
    name: '神戸名物ぼっかけ たこ焼きにかけても！',
    price: 500,
  },
  {
    name: 'トッピング 二種\n-ネギ\n-紅ショウガ\n-天かす\n-キムチ\n-チーズ\n-その他Masashiまで',
    price: 100,
  },
];


const tsumami: Pick<Menu, 'name' | 'price'>[] = [
    {
      name: 'ザーサイ',
      price: 300,
    },
    {
      name: '春雨サラダ',
      price: 300,
    },
    {
      name: 'ごぼうサラダ',
      price: 300,
    },
    {
      name: 'きゅうりの肉みそ',
      price: 300,
    },
    {
        name: 'アメリカンドッグ',
        price: 350,
    },      
    {
        name: '牛すじコロッケ',
        price: 550,
    },
    {
      name: 'エビフライ',
      price: 550,
  },
  {
    name: 'ピリ辛ハッシュドポテト',
    price: 450,
},
];

const FoodMenuPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Heading textAlign="center" marginTop={theme.space[8]}>
        Food Menu
      </Heading>
      <Section
        image={{
          url: 'https://lh3.googleusercontent.com/pw/AP1GczMzzTbytQ8-Aa-OWqRvtrUSe7gCvysGisTO9oUTI_LwiILFm83Hy4andB-okhSW0w2fzjiKbp0lSIIMEjfztSb1wyNH6BaBU6OEZ6G-VlxNcxG86NvkVjDxVrqZhtZq7oaqVIEGkkBD1d3g22ruIfRYIw=w1200-h1200-s-no-gm?authuser=0',
          alt: 'Event Menu',
        }}
        title="Event Menu"
      >
        <List>
          {food.map((item, i) => (
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
          url: 'https://lh3.googleusercontent.com/pw/AP1GczMaALf3S7v5k57oDlvQ4kzRv3Tn4shDBHlq2hEZ0x_onXChf-0r9viaf3wScX4HbYctvWV8fdxbhIqfBSKrC6Y47AewoRZ0EySygs1izhKIwXWjakSPcJ9dl-eU8EsLd5Pd4cvBHBEwysdy1GgK861vKg=w3366-h1893-s-no-gm?authuser=1',
          alt: 'Grand Menu',
        }}
        title="Otsumamiu Menu"
        reverse
      >
        <List>
          {tsumami.map((item, i) => (
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
      {/* <Section
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
      </Section> */}
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

export default FoodMenuPage;
