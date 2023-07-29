import React, { useEffect, useState } from 'react'
import Footer from './Footer'

const Content = () => {

    const [valueH, setValueH] = useState('185')
    const [valueW, setValueW] = useState('65')
    const [bmi, setBmi] = useState('')

    const handleSubmit = () => {
        const height = valueH / 100;
        const originalHeightVal = height * height;
        setBmi((valueW / originalHeightVal).toFixed(1));
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    return (
        <>
            <section className='main'>
                <main>
                    <div className='container container-md contain'>
                        <div className="intro">
                            <h1 className="text-start pt-4 ps-3 head">
                                BMI <span>Calculator</span>
                            </h1>
                            <p className='para'>
                                BMI (Body Mass Index) is a number calculated from a person's weight and height. BMI is a fairly reliable indicator of body fatness for most people. Additionally, BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems.
                            </p>

                            <div className="input-feilds">
                                <div className="feild">
                                    <label htmlFor="height">Height <br />
                                        <input
                                            maxLength={3}
                                            value={valueH}
                                            required
                                            onChange={(e) => setValueH(e.target.value)}
                                            id='height'
                                        /> <span>cm</span>
                                    </label>
                                </div>
                                <div className="feild">
                                    <label htmlFor="weight">Weight <br />
                                        <input
                                            maxLength={3}
                                            required
                                            value={valueW}
                                            onChange={(e) => setValueW(e.target.value)}
                                            id='weight'
                                        /> <span>kg</span>
                                    </label>
                                </div>
                            </div>
                            <div className="submit mt-5">
                                <button type="button"
                                    onClick={handleSubmit}
                                    className='btn'>
                                    calculate
                                </button>
                            </div>
                            <div className="result">
                                {bmi &&
                                    <span className='bmi'>
                                        Your BMI = <span className='value'>
                                            {bmi} kg / m2 </span>
                                    </span>}
                            </div>
                            <p className='para mb-5'> Once you have your BMI number, use the chart below to determine if you need to gain weight, maintain your weight, or lose weight.</p>
                            <h1 className='chart-header'>BMI Chart – Adults (Age 20+)</h1>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>BMI</th>
                                        <th>Weight Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Underweight</td>
                                        <td>&#60; 5th percentile</td>
                                    </tr>
                                    <tr>
                                        <td>Normal or Healthy Weight</td>
                                        <td>5th to &#60; 85th percentile</td>
                                    </tr>
                                    <tr>
                                        <td>Overweight</td>
                                        <td>85th to &#60; 95th percentile</td>
                                    </tr>
                                    <tr>
                                        <td>Obese</td>
                                        <td>95th percentile or greater</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='para mb-5'>
                                If you’re concerned about your BMI or your child’s BMI, talk with your doctor.
                            </p>
                            <div className="path-to-improve">
                                <h1>Path to improved health</h1>
                                <p className="para">
                                    You may be diagnosed with obesity if your body mass index (BMI) is at or above 30kg/m2. You can lower your BMI by following standard weight-loss tips, such as:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Eating healthy. </strong>
                                        <span className='para'> Choose lean meats, fruits, vegetables, and whole grains. Reduce alcohol, sugar, processed foods, sodas, and juices. Consume fewer calories.</span>
                                    </li>
                                    <li>
                                        <strong>Exercising regularly. </strong>
                                        <span className='para'> This includes cardio and weight-bearing exercises to build muscle and lose fat. This is effective in controlling belly fat. Belly fat increases the risk of certain health conditions. Always talk to your doctor before beginning an exercise program.</span>
                                    </li>
                                    <li>
                                        <strong>Being mindful of portion control. </strong>
                                        <span className='para'>  Don’t overeat during meals and snacks.</span>
                                    </li>
                                </ul>
                                <p className="para mb-5">
                                    If your child’s BMI is high (above the 85th percentile), talk with your doctor about how you can help your them lose weight.
                                </p>
                            </div>
                            <div className="bmi-formula-section mb-5">
                                <h2 className='text-center mb-5'>
                                    BMI Formula
                                </h2>
                                <div className="bmi-div-flex">
                                    <div className="formula-img">
                                        <img src="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/calculators/bmi-Vector-3.svg" alt="" />
                                    </div>
                                    <div className="formula-text para-formula">
                                        <p>
                                            To arrive at your BMI figure, you need to know your weight in kilograms and your height in metres. If you know what your height is in centimetres, you can simply divide that number by 100. To calculate your BMI, you need to divide your weight in kilograms by your height in metres squared.
                                            <br /><br />
                                            If you know what your weight is in pounds and what your height is in inches, you can still calculate your BMI. You need to divide your weight in pounds by your height in inches squared. You then need to multiply the amount by 703.
                                            <br />
                                        </p>
                                        <table >
                                            <tbody>
                                                <td>BMI = &nbsp;</td>
                                                <table>
                                                    <tbody>
                                                        <tr>mass (kg)</tr>
                                                        <tr >
                                                            <td className='line'></td>
                                                        </tr>
                                                        <tr>
                                                            <td className='height'>height2 (m)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <p className='text-center mb-5'>
                                    zamam-bmi-calculator. 2023. All rights reserved.
                                </p>
                            </footer>
                        </div>
                    </div>
                    <Footer />
                </main>
            </section>
        </>
    )
}

export default Content