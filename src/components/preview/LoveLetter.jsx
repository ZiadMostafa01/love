function LoveLetter() {
  const letter = [
    `
          Dear darling,
          <br />
          The day I met you for the first time, my life changed. you have an
          incredible way of making my heart happy. You are the love of my life.
          there has never been anyone in my life as special as you. I want to
          hold you, cherich you, and make you very happy each and every day. Iam
          truly blessed to have you as a part of my life. I love you, darling!❤️
    `,
    `              
          I promise to keep doing my best to make you feel special, appreciated,
          and loved, as you deserve. You mean the world to me, and there’s no
          way I could ever put into words just how deeply I care for you. I hope
          that in every smile, every laugh, and every quiet moment together, you
          feel my love and know just how much you mean to me.
    `,
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-caliny font-bold text-[#be0000] my-10">
        💖 Love Letter 💖
      </h2>

      <div className="font-love text-2xl sm:text-3xl space-y-10">
        {letter.map((content, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
        ))}
      </div>
    </div>
  );
}

export default LoveLetter;
