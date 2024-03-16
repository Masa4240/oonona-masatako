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
    price: 700,
  },
  {
    name: 'クライナー',
    price: 500,
  },
];

const craft: Pick<Menu, 'name' | 'price'>[] = [
    {
      name: 'マサハイ(マサシオススメハイボール)',
      price: 700,
    },
    {
      name: 'しみわたるスカーレット',
      price: 700,
    },
    {
      name: '嫁の命の水',
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
          url: 'https://lh3.googleusercontent.com/pw/AP1GczMaTDsaakf6Nmb7DxvHIt9rWCHRwfWlRVW24fewadfGpV5-IoOJGwYcQ5qYYqYT9JQyqEP_SkqylhKkpeoze1inF6h2UomArMBW17spsB9RcDEKuVClTko1uNhVYo5L9qILkie2QbfTWrXi2eCKsKNWLg=w1880-h1382-s-no-gm?authuser=1',
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
          url: 'https://lh3.googleusercontent.com/pw/AP1GczOH8qHlZnmhvB3NWMCvS_9UVmWYgSaYbPfC0e0y1H_JHanoYq6ZL2TcebmsQlOR22QnftWvu0p8_PrsBeFjAM7vWTyrsPmv0WgF-SNleWOJlx7lfKI2ohZDhRYP8UqQRz3P-S8zGcI6XnocYlvYeGsYtg=w1065-h1893-s-no-gm?authuser=1',
          alt: 'Grand Menu',
        }}
        title="Masashi Select"
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
          url: "https://lh3.googleusercontent.com/pw/AP1GczMlhgGCPmJjgGqI4auPWRG1B9uyiPVzcpJx4gM0PiBfN4trXYP7trBFqmD1ybmbeVkLDl7Ql6_m50QjxArojSnhGWtS6o4J0HwZKzXUAK5J0musRj5PQ7uamF0FZdOduQ9xuEN5ELP4w7il7a3yBPEMOg=w1108-h1477-s-no-gm?authuser=0",
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
