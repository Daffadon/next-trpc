const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.news.create({
    data: {
      title:
        "Bitcoin ATM Security Breach Compromised Social Security Numbers and Government IDs",
      source: "Gizmodo.com",
      author: "Matthew Gault",
      description:
        "Byte Federal operates 1,200 Bitcoin ATMs in the U.S. A data breach comprised 58,000 customer's information.",
      image: "https://gizmodo.com/app/uploads/2024/12/BitcoinATM.jpg",
      publishedAt: "2024-12-12T15:30:41Z",
      content:
        "A massive data breach hit Bitcoin ATM company Byte Federal, compromising user information including their social security number, transaction history, and even photographs. If you’ve done business with Byte Federal it’s time to do more than change your passwords. You need to freeze your credit.\n\nWith more than 1,200 locations across the United States, Byte Federal is one of the largest Bitcoin ATM companies in America. For comparison, Bitcoin Depot is the most popular, with more than 8,000 installed machines across the U.S. Bitcoin ATMs solve a problem for the cryptocurrency: it makes it seem normal and easy to use to the average consumer.\n\nAccording to a data breach notification filed with the Maine Attorney General, Byte Federal discovered it had been breached on November 18. The attack happened on September 30. “Byte Federal became aware of a security breach by a bad actor who gained unauthorized access to one of our servers by exploiting a vulnerability in GitLab, a third-party software platform commonly used by developers worldwide for project management and collaboration with comprehensive security features,” Byte Federal explained in a post on its website.\n\n“Upon discovery of the incident, our team immediately shut down our platform, isolated the bad actor, and secured the compromised server. We also made immediate enhancements to our systems, security, and practices,” Byte Federal said in its Maine data breach notice. The attack affected 58,000 customers.\n\nThat meant it reset every customer’s account, forcing them to update their passwords. “We have also updated all of our internal passwords, password management system, tokens and keys for our network to prevent any further unauthorized access,” it said. “With the assistance of an independent cybersecurity team, we are conducting a forensic investigation to determine the cause and the scope of the incident. This investigation is ongoing, and we continue to cooperate with law enforcement in this regard.”\n\nIt stressed that no user assets or funds were hit.\n\nWhile it’s nice that no one’s money was lost, the list of personal information the attackers had access to is bad. It included customers’ “name, birthdate, address, phone number, email address, government-issued ID, social security number, transaction activity, and photographs of users.”\n\nByte Federal said it had no evidence that any of this personal information was actually leaked in the attack, but that’s cold comfort. The breach happened on September 30 and the company didn’t notice until a full month and a half later. A lot of things can happen in a month and a half.\n\nIf you’ve done business with Byte Federal, you should freeze your credit and place a fraud alert on your accounts. To its credit, the company suggested taking these steps in its communication about that hack. Freezing your credit can be a pain in the ass in the short term, but it’s better than someone stealing your identity or opening fraudulent accounts in your name.\n\nSomeone looking to freeze their credit should contact each of the three major credit reporting agencies—Equifax, Experian, and TransUnion—and fill out some forms. If you do it online or over the phone, the agencies have to freeze the account within one business day of receiving the request. There’s a federal website that can act as a guide.\n\nThis is not the first time hackers have compromised a Bitcoin ATM company. Last year, hackers hit the ATM company General Bytes and made off with $1.5 million. In September of this year, around the time of the Byte Federal breach, the FTC warned that ATM Bitcoin scams had jumped in the last few years.\n\n“FTC Consumer Sentinel Network data show that fraud losses at BTMs are skyrocketing, increasing nearly tenfold from 2020 to 2023, and topping $65 million in just the first half of 2024,” the FTC said. “Since the vast majority of frauds are not reported, this likely reflects only a fraction of the actual harm.”",
    },
  });
  await prisma.news.create({
    data: {
      title:
        "El Salvador Strikes $1.4 Billion IMF Deal After Scaling Back Bitcoin Policies",
      source: "Slashdot.org",
      author: "BeauHD",
      description:
        "El Salvador secured a $1.4 billion loan deal with the IMF after agreeing to scale back its bitcoin policies, making cryptocurrency acceptance voluntary for businesses and limiting public sector involvement. The deal aims to stabilize the country's economy, with bitcoin's recent rally boosting the value of El Salvador's holdings",
      image: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2024-12-24T22:40:00Z",
      content:
        'In 2021, El Salvador became the first country in the world to make bitcoin legal tender. This week, the cryptocurrency briefly hit a fresh record high of more than $108,000.\n\n"The potential risks of the Bitcoin project will be diminished significantly in line with Fund policies," the IMF announcement said. "Legal reforms will make acceptance of Bitcoin by the private sector voluntary. For the public sector, engagement in Bitcoin-related economic activities and transactions in and purchases of Bitcoin will be confined."\n\nLast Friday, El Salvador purchased more than 11 BTC worth $1.07 million and executed another 11 BTC purchase on Sunday, according to crypto data platform Arkham. El Salvador\'s President, Nayib Bukele, is ramping up buys "with an interim goal of acquiring 20,000 more Bitcoin," reports the Daily Hodl.',
    },
  });
  await prisma.news.create({
    data: {
      title:
        "Who or what else did President Biden pardon? Find out in the quiz!",
      source: "NPR",
      author: "Holly J. Morris",
      description:
        "Also in your grab bag of weekly trivia: martial law, bitcoin, the first lady's holiday décor, a Kennedy who's not RFK Jr., brain rot and the popemobile.",
      image:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/11308x6361+0+2/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F53%2F41%2Fd7dc88204978a7b99f4cd16d8366%2Fbiden-pope-biden.jpg",
      publishedAt: "2024-12-06T10:01:00Z",
      content:
        "In a refreshing change of pace, the presidents of the U.S. and South Korea dominated the news this week. Are pardons and martial law the shape of things to come? No comment!\n\nPlus, dark chocolate is still good for you, there's another word of the year (although it's a phrase) AND Pantone dropped its color of 2025.\n\nIf all that sounds familiar, you'll get at least a 5/11 on the quiz. Good luck!",
    },
  });

  await prisma.news.create({
    data: {
      title: "Price of bitcoin falls more than 10%",
      source: "ABC News",
      author: "Max Zahn",
      description:
        "The drop erases some of the bitcoin gains enjoyed since the election of Trump.",
      image:
        "https://i.abcnewsfe.com/a/b6bad89c-b2da-487c-8735-045a8c744730/bitcoin-rt-jef-241220_1734707681562_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-12-20T15:48:02Z",
      content:
        "The price of bitcoin has tumbled about 12% from a record high reached earlier this week.\n\nAfter topping $108,000 for the first time on Tuesday, the world’s largest cryptocurrency dropped to a price below $93,000 in early trading on Friday. Bitcoin soon recovered some of those losses, settling around $95,000 at 9:30 a.m. ET.\n\nThe selloff rippled through the wider cryptocurrency market. Ether, the second-largest cryptocurrency, ticked down about 1%. Lesser-known dogecoin fell 4% and crypto-trading exchange Coinbase fell nearly 2%.\n\nThe slide for bitcoin has largely come after the Federal Reserve announced late Wednesday that it expects fewer interest rate cuts next year.\n\nLower interest rates typically stimulate economic activity, drive up corporate profits and lift the value of forward-looking assets like stocks and cryptocurrencies. In theory, a longer-than-expected period of high interest rates could diminish those returns.\n\nThe Fed’s forecast sent stocks falling within minutes and helped push bitcoin to its lowest level in weeks.\n\nThe recent slide for bitcoin erases some of the gains enjoyed since the election of former President Donald Trump, who is widely viewed as friendly toward cryptocurrency. Still, the price has climbed about 36% since Election Day.\n\nBitcoin had climbed to a new high earlier this week after Trump reaffirmed support for a U.S. bitcoin strategic reserve.\n\nA U.S. bitcoin strategic reserve would amount to a substantial government holding of bitcoin similar to the country’s stockpile of oil or gold. Bitcoin bulls expect such a potentially large acquisition of bitcoin to drive up demand and hike the price.\n\nSupporters of a bitcoin strategic reserve also say the asset would help diversify the nation’s financial holdings, protecting it from the possible decline in value of other assets, such as the U.S. dollar.\n\nSince the price of bitcoin is highly volatile, a large purchase of the asset could end up threatening the nation’s financial stability rather than safeguarding it, some critics say.\n\nThe major stock indexes rebounded on Thursday, recovering some of the losses they took after the Fed’s unwelcome forecast.",
    },
  });

  await prisma.news.create({
    data: {
      title: "How Bitcoin Became Boring",
      source: "The Atlantic",
      author: "James Surowiecki",
      description:
        "Cryptocurrency’s newly minted respectability has come at the price of becoming just another asset class.",
      image:
        "https://cdn.theatlantic.com/thumbor/-EUbcJKpDyFH0obceJGnhygEnmA=/0x43:2000x1085/1200x625/media/img/mt/2024/12/20241219_bitcoin_respectable/original.jpg",
      publishedAt: "2024-12-22T13:00:00Z",
      content:
        "Until now, the phrase crypto winter meant that cryptocurrency traders were facing hard times: a period of tumbling and depressed prices that had to be weathered until the good times returned. Today, though, the cryptocurrency industry is enjoying an end-of-year season more akin to “brat summer”: This month, crypto prices hit previously unheard-of highs, with bitcoin trading above $100,000. In this new Era of Good Feelings—to borrow a phrase from early-19th-century American history—skeptics have become believers, and a digital-economic instrument that was designed to circumvent, if not replace, the traditional financial system is becoming more and more integrated into it.\n\nThe catalyst for this boom, of course, was last month’s election of Donald Trump. Bitcoin’s price fell this week, but it’s still up almost 40 percent since November 5, and other major cryptocurrencies, such as ethereum and ripple, have seen similar spikes. It’s not hard to see why. Trump nominated Cantor Fitzgerald CEO and crypto enthusiast Howard Lutnick to be his secretary of commerce. He named Paul Atkins, also a crypto advocate, as the next head of the Securities Exchange Commission, replacing Gary Gensler, who became crypto’s bête noire for bringing lawsuits against the biggest crypto exchanges and numerous other players in the industry. And Trump recently repeated his campaign promise to set up a Bitcoin Strategic Reserve, which would require the Treasury Department to purchase billions of dollars’ worth of the cryptocurrency and hold it as a “permanent national asset.”\n\nOn top of the regulatory environment growing markedly more crypto-friendly, other bullish signs have emerged as well. Last week, the investment giant BlackRock, which back in January was one of 10 companies to issue exchange-traded funds tied to bitcoin, released a report suggesting that investors “with suitable governance and risk tolerance” (meaning tolerance for little governance and lots of risk) should consider having as much as 2 percent of their assets in bitcoin. And MicroStrategy, a software company whose business nowadays consists almost entirely of issuing stock and convertible debt in order to buy bitcoin, was just added to the Nasdaq-100 after its stock rose more than 600 percent in the first 10 months of the year. All of the good news has bitcoin owners—also known as HODLers, a moniker derived from a common online typo of hold that was then also said to stand for “hold on for dear life”—feeling buoyant: On X, predictions of bitcoin hitting $1 million by the end of 2025 are easy to find.\n\nI first wrote about bitcoin in 2011, when one Bitcoin cost about $14, and even then, I thought it was a bubble. Had I just taken a flyer and bought $1,000 of it, I’d be a multimillionaire today. So for longtime bitcoin skeptics like me, a measure of chagrin at having been so wrong about crypto’s evolution is difficult to avoid. At the same time, what’s been fascinating about the popular embrace of bitcoin is that the reasons to be skeptical of it never disappeared: It’s still an enormously volatile asset; its price is still mostly dependent on sentiment rather than underlying fundamental value; it’s still ill-suited to be a widely used digital currency. What’s changed is that the investment world has decided none of those things really matter. As is true of gold, bitcoin is valuable because people have collectively decided it’s valuable. In effect, HODLers have succeeded in conjuring a respectable asset out of thin air.",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
