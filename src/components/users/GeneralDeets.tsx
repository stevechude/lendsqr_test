import React from 'react'
import styles from '../../styles/general-details.module.scss'

const GeneralDeets = () => {
    return (
        <div className={styles.container}>
            {/* first */}
            <div className={styles.gdfirst}>
                <p>Personal Information</p>
                <div className={styles.infoDiv}>
                    <div>
                        <label htmlFor="">full Name</label>
                        <span>Grace Effiom</span>
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <span>07060780922</span>
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <span>grace@gmail.com</span>
                    </div>
                    <div>
                        <label htmlFor="">Bvn</label>
                        <span>07060780922</span>
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                        <span>Female</span>
                    </div>
                    <div>
                        <label htmlFor="">Marital status</label>
                        <span>Single</span>
                    </div>
                    <div>
                        <label htmlFor="">Children</label>
                        <span>None</span>
                    </div>
                    <div>
                        <label htmlFor="">Type of residence</label>
                        <span>Parent’s Apartment</span>
                    </div>
                </div>
            </div>
            <hr />
            {/* second */}
            <div className={styles.gdsecond}></div>
            <hr />
            {/* third */}
            <div className={styles.gdthird}></div>
            <hr />
            {/* fourth */}
            <div className={styles.gdfourth}></div>
        </div>
    )
}

export default GeneralDeets