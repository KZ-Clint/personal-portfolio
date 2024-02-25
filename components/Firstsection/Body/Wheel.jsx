import styles from '../../../styles/Body.module.css';


export default function Wheel () {

    const skills = [
        { name: "HTML", clr: "#f44336" },
        { name: "CSS", clr: "#2196f3" },
        { name: "JavaScript", clr: "#4caf50" },
        { name: "React", clr: "#ff9800" },
        { name: "Next.js", clr: "#9c27b0" },
        { name: "Tailwind CSS", clr: "#607d8b" },
        { name: "API Integration", clr: "#ffeb3b" },
        { name: "Node.js", clr: "#e91e63" },
        { name: "MongoDB", clr: "#9e9e9e" },
        { name: "Express.js", clr: "#00bcd4" },
        { name: "AWS", clr: "#795548" },
        { name: "UI/UX", clr: "#8bc34a" }
      ];
    

  return (
    <>
        <div className={styles.container}>
            <div className={`${styles.wheel}`}>
                { skills.map( (s, index) => (
                    <div key={s.name} className={styles.skill} style={{ "--i": index + 1, "--clr": s.clr, "--total-skills":skills.length }} > <span>  {s.name} </span> </div>
                ) ) }
                
                {/* <div className={styles.skill} style="--i:2;--clr:#20b2aa;"  > <span>  CSS </span> </div>
                <div className={styles.skill} style="--i:3;--clr:#d63e92;" > <span>  JavaScript </span>  </div>
                <div className={styles.skill} style="--i:4;--clr:#daa520;" > <span>  React </span> </div>
                <div className={styles.skill} style="--i:1;--clr:#ff340f;" > <span>  Next.js </span> </div>
                <div className={styles.skill} style="--i:1;--clr:#ff7f50;" > <span>  Tailwind CSS </span> </div>
                <div className={styles.skill} style="--i:1;--clr:#3cb371;" > <span>  API Integration </span> </div>
                <div className={styles.skill} style="--i:1;--clr:#db7093;" > <span>  Node.js </span> </div>
                <div className={styles.skill} style="--i:1;--clr:#4169e1;" > <span>  MongoDB </span> </div>
                <div className={styles.skill}> <span>  Express.js </span> </div>
                <div className={styles.skill}> <span>  AWS </span>  </div>
                <div className={styles.skill}> <span>  UI/UX </span> </div> */}
            </div>
        </div>
    </>
  )
}