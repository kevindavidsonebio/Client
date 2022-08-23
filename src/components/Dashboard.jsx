import React, { useEffect, useState } from 'react'
import data from "./data.json";
import searchIcon from "../assets/images/search.svg";
import bookMarkSolid from "../assets/images/bookmark-solid.svg"
import Phone from "../assets/images/phone.svg"
import '../assets/styles/icons.css'

function Dashboard() {

    return (
        <div className='container'>
            <div className="d-flex justify-content-between mt-5">
                <div className="d-flex flex-column mb-3">
                    <h3>Announcement</h3>
                    <span className='fw-semibold'>View, create, or edit announcement for all employees of your company.</span>
                </div>
                <div className="p-2">
                    <button type="button" className="btn text-white fw-bold" style={{background: "#49A82D"}}>+ Post an Announcement</button>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                    <div className='mt-2'>
                        <div className='rounded-pill text-white d-inline px-3' style={{background: "#49A82D"}}>{data.length}</div>
                        <span className="mx-3 fw-bold" style={{color: "#49A82D"}}>All</span>
                        <div className='rounded-pill text-white d-inline px-3' style={{background: "orange"}}>{data.length}</div>
                        <span className="text-dark mx-3 fw-normal">Drafts</span>
                    </div>

                    <div className="row">
                        <div className="col">
                            <select className="form-select">
                                <option selected>Filter by</option>
                                <option value="1">First filter</option>
                                <option value="2">Second filter</option>
                            </select>
                        </div>
                        <div className="col input-group mb-3">
                            <input type="search" style={{borderRight: "0"}} className="form-control" placeholder="Search..." />
                            <span className="bg-white px-3" style={{paddingTop: "5px", border: "1px solid #CED4DA"}} id="basic-addon1"><img src={searchIcon} alt='search icon' /></span>
                        </div>
                </div>
            </div>

    <table className="table" style={{tableLayout: "fixed", width: "100%", border: "1px solid #CED4DA"}}>
        <thead className='font-monospace'>
            <tr>
                <th className="th-sm px-3">TITLE
                </th>
                <th className="th-sm px-3">MESSAGE
                </th>
                <th className="th-sm px-3">SENT BY
                </th>
                <th className="th-sm px-3">
                SENT THROUGH
                <span className="fa-solid fa-circle-info circleInfo align-middle" style={{paddingLeft: "10px"}}></span>
                </th>
                <th className="th-sm px-3">DATE CREATED
                </th>
                <th className="th-sm px-3">START DATE
                </th>
                <th className="th-sm px-3">END DATE
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map(( listValue, index ) => {
                return (
                    <tr key={index} className="align-middle">
                        <td style={{overflowX: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                        {listValue.title}
                        </td>
                        <td style={{overflowX: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                        {listValue.message}
                        </td>
                        <td>{listValue.sent_by}</td>
                        <td className='d-flex flex-row'>{listValue.sent_through[0].bookmark === true ? <img src={bookMarkSolid} alt="bookmark" style={{width: "1vw"}} className="mx-1 my-3" /> : null}{listValue.sent_through[1].phone === true ? <img src={Phone} alt="mobile" style={{width: "1vw"}} className="mx-1 my-3"/> : null}</td>
                        <td>{listValue.date_created}</td>
                        <td>
                        {listValue.start_date}<br />
                        <span className='text-muted'>{listValue.start_time}</span>
                        </td>
                        <td>{listValue.end_date}<br />
                        <span className='text-muted'>{listValue.end_time}</span>
                        </td>
                    </tr>
                );
                })}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={3} style={{fontSize: '14px', color: "gray"}}>Items per page
                    <div className="btn-group" style={{marginLeft: "10px"}}>
                        <button type="button" className="btn btn-sm dropdown-toggle bg-transparent border" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>{data.length}</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li>asdfasdfasdf</li>
                            <li>asdfasdfasdf</li>
                            <li>asdfasdfasdf</li>
                        </ul>
                    </div>
                </td>
                <td colSpan={2}>
                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </td>
                <td colSpan={2} className="text-end" style={{fontSize: '14px', color: "gray"}}>Showing 1-10 of 1</td>
            </tr>
        </tfoot>
    </table>
    </div>
  )
}

export default Dashboard;