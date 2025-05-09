import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/success.avif";
import blog1part2 from "../assets/blog1part2.png";
import blog2part2 from "../assets/blog2part2.png";
import blog3part2 from "../assets/success.avif"; // Add your third blog part image here
import userDp from "../assets/userdp.jpg";

const blogsData = [
{
  src: blog1,
  title: "The Future of Taxation & Accounting in a Digital World",
  desc: `The accounting and taxation industry is undergoing a major shift driven by cloud solutions, AI tools, and evolving compliance laws...`,
  desc2: `Accurate financial reporting and timely tax compliance have become strategic functions in modern business. Accountants are no longer just bookkeepers—they're proactive advisors ensuring business continuity and regulatory confidence.`,
  postedByDp:
    "https://i.pinimg.com/474x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg",
  desc3: `Digital tools like cloud-based ledgers and automated tax software have transformed how firms handle reporting, audits, and real-time financial oversight. Accountants are expected to embrace tech without compromising accuracy.`,
  postedByName: "Arjun Nair",
  postedOn: "April 2, 2025",
  features: [
    "Improved Accuracy & Compliance",
    "Cost-Efficient Operations",
    "Real-Time Financial Insights",
    "Streamlined Reporting Processes",
  ],
  title2: `How Technology is Reshaping Tax Preparation and Accounting Services`,
  desc4: `The integration of digital tools, such as AI-powered tax calculators and cloud accounting platforms, is revolutionizing traditional workflows. Professionals now focus more on analysis, strategic planning, and real-time advising rather than just year-end filing.`,
  blogpart2: blog1part2,
}
,
  {
    src: blog2,
    title: "8 Factors to Consider Before Investing",
    desc: `Investing is a crucial financial decision that can shape your future wealth...`,
    desc2: `Every investor has unique objectives, risk tolerance, and financial constraints...`,
    postedByDp: userDp,
    desc3: `Risk management is one of the most critical aspects of investing...`,
    postedByName: "Sourabh Soni",
    postedOn: "April 2, 2025",
    features: [
      "Assess Your Risk Tolerance",
      "Understand Market Trends",
      "Consider Diversification",
      "Analyze Historical Performance",
      "Review Liquidity Needs",
      "Evaluate Economic Conditions",
      "Check Regulatory Compliance",
      "Set Clear Investment Goals",
    ],
    title2: `How to Make Smarter Investment Decisions?`,
    desc4: `Smart investing is about knowledge, patience, and strategy...`,
    blogpart2: blog2part2,
  },
  {
    src: blog3,
    title: "Succession Planning: A Will for Your Business",
    desc: `Succession planning is more than just drafting a will — it's about creating a sustainable transition strategy for your business...`,
    desc2: `Most business owners don’t take proper holidays, often due to a lack of delegation and planning. Succession planning ensures your company can continue thriving even in your absence.`,
    postedByDp:
      "https://i.pinimg.com/474x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg",
    desc3: `Whether you're planning to retire, sell, or simply step away temporarily, a clear plan ensures operational continuity and stakeholder confidence. It also reduces disruptions and keeps your team aligned.`,
    postedByName: "Sourabh Soni",
    postedOn: "April 10, 2025",
    features: [
      "Business Continuity",
      "Strategic Delegation",
      "Employee Morale",
      "Leadership Preparation",
    ],
    title2: `Why Every Business Needs a Succession Plan`,
    desc4: `Without a plan, even the most successful business can stumble. Succession planning offers clarity, protects your legacy, and supports future leadership. It’s a proactive move for long-term growth and stability.`,
    blogpart2: blog3part2, // Update this to the correct path if needed
  },
];

export default blogsData;
