import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Heading, useTheme, Flex } from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';
import { DescriptionItem } from './DescriptionItem';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

// export const Description = () => {
export const Description  = () => {
    const theme = useTheme();
  const windowSize = useWindowSize();
  const ref = useRef<HTMLElement>(null);

  const [height, setHeight] = useState<number>(-1);

  useEffect(() => {
    if (!ref.current || !windowSize.height || !windowSize.width) return;

    if (windowSize.width > windowSize.height) {
      setHeight(-1);
      return;
    }

    const clientHeight = ref.current.scrollHeight;
    if (clientHeight > windowSize.height) {
      setHeight(clientHeight);
      return;
    }
    setHeight(windowSize.height);
  }, [windowSize, ref]);

  return (
    <div>
    <Flex
      as="section"
      position="relative"
      align="center"
      justify="center"
      direction="column"
      height={height}
      minHeight="100vh"
      overflow="hidden"
      ref={ref}
    >
      <BackgroundImage imageUrl="https://lh3.googleusercontent.com/DA704PWoPSzPemo3wHeFThNhaiF-tWVQQOxhQOOjafI7GSvr7smKUKODeciS_VY1FtOlFhq-_TZ7wqxQH9fSAik9tzXG7WNL-cpfwbxi3Oi6ycah5zDpFoEyLr78VTITz3snuNzMDA" />
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        marginTop={theme.space[24]}
        marginX={theme.space[1]}
        color={theme.colors.white}
      >
        嵐を呼ぶたこ焼きバル
      </Heading>
      <Flex
        flexWrap="wrap"
        justify="center"
        align="center"
        width="100%"
        marginTop={theme.space[8]}
        marginBottom={theme.space[12]}
      >
        {/* <DescriptionItem
          label="ヴィネリアソルクオーレ"
          title="Vineria Sorcuore"
          link={{ label: 'メニューを見る', url: '/menu' }}
        >
          {
            '～心から楽しいたこ焼きバル～\nお客様に素敵な時間を過ごして頂きたい気持ちから作った造語\nソリーゾ：笑顔  ×  クオーレ：心 ＝ ソルクオーレ'
          }
        </DescriptionItem> */}
        <DescriptionItem
          label="こだわり"
          title="Commitment"
          link={{ label: 'メニューを見る', url: '/menu' }}
        >
          {`嵐を呼んだ串カツ店長MASASHIがまた帰ってきます。\nこだわりのわいわいたこ焼きをみんなで焼きましょう！\nついでに次女ゆきの生誕を祝いましょう！`}
          </DescriptionItem>
        </Flex>
      </Flex>
    </div>
    
  );
};
