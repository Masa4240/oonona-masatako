import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Header } from '../../organisms/Header/Header';
import { initGA, logPageView } from '../../utils/analytics';
import { useTheme, Box } from '@chakra-ui/core';

type Props = React.ComponentProps<typeof Header>;

export const Layout: React.FC<Props> = ({ children, ...props }) => {
  const [gaInitialize, setGaInitialize] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (!gaInitialize) {
      initGA();
      setGaInitialize(true);
    }
    logPageView();
  }, []);

  return (
    <>
      <Head
        title="Masatako Supported by Oonona"
        description="大野菜は東急東横線大倉山にある家族経営のアットホームな野菜屋とごはん屋です。大野菜の野菜は農家さんのお宅まで自分達で行って、今朝採りお野菜を店頭に並べています。
        ぜひ大野菜の旬だからこそ美味しいお野菜で四季の変化を楽しんでください。"
        keywords={['Vineria Sorcuore', 'ヴィネリア ソルクオーレ', '両国', 'イタリアン']}
        imageUrl="https://lh3.googleusercontent.com/pw/AP1GczNcD6MpBzB6Whm1FDcxGHB6g_e1dgzUOhF9Ui4SEc15iG_xRTz7FjJ8rkwPGpFRO1K-bFWT5OVk7AQQZ9L7PqXvCrpdv9QuMs0NOrWZuzLk6ROdGMw6yi7R5jCtsQUCe_kljdC_fpArZBuu8nvKZEkrwA=w1087-h883-s-no-gm?authuser=1"
      />
      <Header {...props} />
      <Box
        as="main"
        minHeight={`calc(100vh - 84px - 2rem - ${theme.sizes[16]})`} // viewportHeight - HeaderHeight - TitleTopMargin - FooterHeight
      >
        {children}
      </Box>
    </>
  );
};
