document.write(`
  <div id="schedule">
    <button id="toggle-btn-schedule">
      <span><i class="fas fa-sun"></i></span>
    </button>
    <div id="clock-schedule">GMT+8 00:00</div>
    <div class="container">
      <div class="schedule-heading">My Schedule</div>
      
      <div class="schedule-container">
        <div class="schedule-switcher">
          <!-- My Timetable button -->
          <button class="schedule-switch-btn" data-view="my-timetable">My Timetable</button>
          <!-- USTC Timetable button -->
          <button class="schedule-switch-btn" data-view="ustc-timetable">USTC Timetable</button>
          <button class="schedule-switch-btn" data-view="timetable">Timetable</button>
          <button class="schedule-switch-btn active" data-view="calendar">Calendar</button>
        </div>
        
        <!-- My Timetable Section -->
        <div class="schedule-section" id="my-timetable-section">
          <div class="semester-selector">
            <div class="semester-dropdown">
              <button class="semester-dropdown-btn">
                Select Semester <i class="fas fa-caret-down"></i>
              </button>
              <div class="semester-dropdown-content">
                <a href="#" data-semester="freshman-first">Freshman Year - First Semester</a>
                <a href="#" data-semester="freshman-second">Freshman Year - Second Semester</a>
                <a href="#" data-semester="sophomore-first">Sophomore Year - First Semester</a>
                <a href="#" data-semester="sophomore-second">Sophomore Year - Second Semester</a>
                <a href="#" data-semester="junior-first">Junior Year - First Semester</a>
                <a href="#" data-semester="junior-second">Junior Year - Second Semester</a>
                <a href="#" data-semester="senior-first">Senior Year - First Semester</a>
                <a href="#" data-semester="senior-second">Senior Year - Second Semester</a>
              </div>
            </div>
          </div>
          
          <!-- Freshman Year - First Semester -->
          <div class="semester-timetable-container active" id="freshman-first">
            <h3 class="semester-title">Freshman Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="freshman-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <!-- Mon -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">大学英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">15–18周</div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">大学英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">7–18周</div>
                      </div>
                    </td>
                    <!-- Wed -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">大学英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">7–18周</div>
                      </div>
                    </td>
                    <!-- Thu -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">大学英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">7–18周</div>
                      </div>
                    </td>
                    <!-- Fri -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">大学英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">7–18周</div>
                      </div>
                    </td>
                    <!-- Sat -->
                    <td></td>
                    <!-- Sun -->
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <!-- only Sat/Sun cells since others rowspan from period 1 -->
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <!-- Mon: overlap 6–8 (思想道德与法治 6–7 + 大学英语1 7–8) -->
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">16:40</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-name">思想道德与法治</div>
                          <div class="instructor">—</div>
                          <div class="location">N304</div>
                          <div class="weeks">4–19周</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-name">大学英语1</div>
                          <div class="instructor">—</div>
                          <div class="location">—</div>
                          <div class="weeks">1, 7–18周</div>
                        </div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">体育1（武术/田径）</div>
                        <div class="instructor">—</div>
                        <div class="location">B01-2层武术教室</div>
                        <div class="weeks">4–19周</div>
                      </div>
                    </td>
                    <!-- Wed -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">体育1（田径）</div>
                        <div class="instructor">—</div>
                        <div class="location">B01西区田径场</div>
                        <div class="weeks">4–19周</div>
                      </div>
                    </td>
                    <!-- Thu -->
                    <td></td>
                    <!-- Fri -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">大学生心理健康教育</div>
                        <div class="instructor">—</div>
                        <div class="location">N105 / W201</div>
                        <div class="weeks">4–18周</div>
                      </div>
                    </td>
                    <!-- Sat -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">数学科学导论</div>
                        <div class="instructor">—</div>
                        <div class="location">N203 / N403</div>
                        <div class="weeks">4–12周</div>
                      </div>
                    </td>
                    <!-- Sun -->
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <!-- only Thu/Sun appear; others are rowspanned -->
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <!-- all columns empty; Mon/Tue/Wed/Fri/Sat are skip due to rowspan -->
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Freshman Year - Second Semester -->
          <div class="semester-timetable-container" id="freshman-second">
            <h3 class="semester-title">Freshman Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="freshman-second-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <!-- Mon -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">中国近现代史纲要</div>
                        <div class="instructor">—</div>
                        <div class="location">N304</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">解析几何</div>
                        <div class="instructor">—</div>
                        <div class="location">N102</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Wed -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">程序设计与算法语言</div>
                        <div class="instructor">—</div>
                        <div class="location">N303</div>
                        <div class="weeks">1–8周</div>
                      </div>
                    </td>
                    <!-- Thu -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">解析几何</div>
                        <div class="instructor">—</div>
                        <div class="location">N102</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Fri -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">学术英语</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">3–13周</div>
                      </div>
                    </td>
                    <!-- Sat -->
                    <td></td>
                    <!-- Sun -->
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <!-- Tue -->
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">学术英语</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">3–13周</div>
                      </div>
                    </td>
                    <!-- Wed -->
                    <td></td>
                    <!-- Thu -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">学术英语</div>
                        <div class="instructor">—</div>
                        <div class="location">—</div>
                        <div class="weeks">3–13周</div>
                      </div>
                    </td>
                    <!-- Fri -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">中国近现代史纲要</div>
                        <div class="instructor">—</div>
                        <div class="location">N304</div>
                        <div class="weeks">13–16周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <!-- Mon+Tue overlaps handled starting at period 8 below; period 6 no class -->
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <!-- Mon: overlap 8–10 (程序设 8–9 + 军事理论 9–10) -->
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-name">程序设计与算法语言</div>
                          <div class="instructor">—</div>
                          <div class="location">N303</div>
                          <div class="weeks">1–16周</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-name">军事理论</div>
                          <div class="instructor">—</div>
                          <div class="location">N205</div>
                          <div class="weeks">1–16周</div>
                        </div>
                      </div>
                    </td>
                    <!-- Tue: overlap 8–10 (体育2 8–9 + 程序设实验 9–10) -->
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-name">体育2（武术）</div>
                          <div class="instructor">—</div>
                          <div class="location">B01-2层武术教室</div>
                          <div class="weeks">1–16周</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-name">程序设计与算法语言（实验）</div>
                          <div class="instructor">—</div>
                          <div class="location">S101 / S201</div>
                          <div class="weeks">1–16周</div>
                        </div>
                      </div>
                    </td>
                    <!-- Wed: 体育2（田径）8–9 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-name">体育2（田径）</div>
                        <div class="instructor">—</div>
                        <div class="location">B01西区田径场</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Thu/Fri/Sat/Sun -->
                    <td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <!-- Thu/Fri/Sat/Sun -->
                    <td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <!-- Wed finishes; others part of overlaps -->
                    <td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Sophomore Year - First Semester -->
          <div class="semester-timetable-container" id="sophomore-first">
            <h3 class="semester-title">Sophomore Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="sophomore-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <!-- Mon 数学分析1（集中）1–4 -->
                    <td class="has-class event-cell" rowspan="4">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析1（集中）</div>
                        <div class="instructor">—</div>
                        <div class="location">N203</div>
                        <div class="weeks">7–8周</div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td></td>
                    <!-- Wed -->
                    <td></td>
                    <!-- Thu -->
                    <td></td>
                    <!-- Fri 数学分析1（集中）1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">数学分析1（集中）</div>
                        <div class="instructor">—</div>
                        <div class="location">N203</div>
                        <div class="weeks">7–8周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <!-- Tue 微分拓展1?（本学期上午3–5无课） -->
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <!-- Mon: overlap 6–8 (概率论 6–7 + 数据结构与算法 7–8) -->
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">16:40</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-name">概率论</div>
                          <div class="instructor">—</div>
                          <div class="location">N303</div>
                          <div class="weeks">1–16周</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-name">数据结构与算法</div>
                          <div class="instructor">—</div>
                          <div class="location">S301</div>
                          <div class="weeks">1–16周</div>
                        </div>
                      </div>
                    </td>
                    <!-- Tue 高等代数1 6–7 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">高等代数1</div>
                        <div class="instructor">—</div>
                        <div class="location">S305 / N203,N302</div>
                        <div class="weeks">1, 8–10, 12, 16周</div>
                      </div>
                    </td>
                    <!-- Wed -->
                    <td></td>
                    <!-- Thu 马克思原理 6–7 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">马克思主义基本原理</div>
                        <div class="instructor">—</div>
                        <div class="location">W608</div>
                        <div class="weeks">1–12周</div>
                      </div>
                    </td>
                    <!-- Fri 概率论（分班） 6–7 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">概率论（分班）</div>
                        <div class="instructor">—</div>
                        <div class="location">A405/N104/N102/N204/S301/N302</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Sat -->
                    <td></td>
                    <!-- Sun -->
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <!-- Tue/Thu/Fri rowspans continue -->
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <!-- Tue 数学分析拓展1（单节） 8–8 -->
                    <td class="has-class event-cell">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">16:40</div>
                      <div class="course-container">
                        <div class="course-name">数学分析拓展1</div>
                        <div class="instructor">—</div>
                        <div class="location">N103</div>
                        <div class="weeks">7–8周</div>
                      </div>
                    </td>
                    <td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <!-- Tue 数据结构与算法（实践） 9–10 -->
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">16:45</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-name">数据结构与算法（实践）</div>
                        <div class="instructor">—</div>
                        <div class="location">S201 / S205</div>
                        <div class="weeks">3–14周</div>
                      </div>
                    </td>
                    <td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Sophomore Year - Second Semester -->
          <div class="semester-timetable-container" id="sophomore-second">
            <h3 class="semester-title">Sophomore Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="sophomore-second-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <!-- Mon 高等代数2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">高等代数2</div>
                        <div class="instructor">—</div>
                        <div class="location">S305</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td></td>
                    <!-- Wed 高等代数2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">高等代数2</div>
                        <div class="instructor">—</div>
                        <div class="location">S305</div>
                        <div class="weeks">8–10等</div>
                      </div>
                    </td>
                    <!-- Thu 普通物理A1 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">普通物理A1</div>
                        <div class="instructor">—</div>
                        <div class="location">N303</div>
                        <div class="weeks">1–16周</div>
                      </div>
                    </td>
                    <!-- Fri -->
                    <td></td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <!-- Wed 数理统计1 7–8（在上一行开始，故此行继续占位；这里开始另一门在周四） -->
                    <td></td>
                    <td></td>
                    <!-- Wed 数理统计1 7–8 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:50</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-name">数理统计1</div>
                        <div class="instructor">—</div>
                        <div class="location">N202</div>
                        <div class="weeks">8, 11周</div>
                      </div>
                    </td>
                    <!-- Thu 高级英语1 7–8 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:50</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-name">高级英语1</div>
                        <div class="instructor">—</div>
                        <div class="location">C07-110A</div>
                        <div class="weeks">4–13周</div>
                      </div>
                    </td>
                    <!-- Fri 数理统计1 7–8 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:50</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-name">数理统计1</div>
                        <div class="instructor">—</div>
                        <div class="location">N202</div>
                        <div class="weeks">7–8, 11周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <!-- Mon 数理统计1 9–10（第10周） -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">16:45</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-name">数理统计1</div>
                        <div class="instructor">—</div>
                        <div class="location">N202</div>
                        <div class="weeks">10周</div>
                      </div>
                    </td>
                    <!-- Tue 数学分析拓展2 9–10 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">16:45</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析拓展2</div>
                        <div class="instructor">—</div>
                        <div class="location">N103</div>
                        <div class="weeks">7–16周</div>
                      </div>
                    </td>
                    <!-- Wed/Thu (上一行已放) -->
                    <!-- Thu 另有 数学分析拓展2（第14周独占） -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">16:45</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析拓展2</div>
                        <div class="instructor">—</div>
                        <div class="location">N103</div>
                        <div class="weeks">14周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Junior Year - First Semester -->
          <div class="semester-timetable-container" id="junior-first">
            <h3 class="semester-title">Junior Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="junior-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <!-- Mon 普通物理A2与物理实验 1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">普通物理A2与物理实验</div>
                        <div class="instructor">—</div>
                        <div class="location">W608</div>
                        <div class="weeks">1–4, 7–18周</div>
                      </div>
                    </td>
                    <!-- Tue 优化方法 1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">优化方法</div>
                        <div class="instructor">—</div>
                        <div class="location">S305</div>
                        <div class="weeks">1–12周</div>
                      </div>
                    </td>
                    <!-- Wed 普通物理A2与物理实验 1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">普通物理A2与物理实验</div>
                        <div class="instructor">—</div>
                        <div class="location">N404</div>
                        <div class="weeks">1–?周</div>
                      </div>
                    </td>
                    <!-- Thu 优化方法 1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">优化方法</div>
                        <div class="instructor">—</div>
                        <div class="location">S305</div>
                        <div class="weeks">1–12周</div>
                      </div>
                    </td>
                    <!-- Fri 数学分析3 1–2 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-name">数学分析3</div>
                        <div class="instructor">—</div>
                        <div class="location">N202</div>
                        <div class="weeks">9–12周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <!-- Mon 高等代数3 3–4 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">高等代数3</div>
                        <div class="instructor">—</div>
                        <div class="location">N202</div>
                        <div class="weeks">1–?周</div>
                      </div>
                    </td>
                    <!-- Tue 数学分析拓展3 3–4 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析拓展3</div>
                        <div class="instructor">—</div>
                        <div class="location">N204</div>
                        <div class="weeks">9–14周</div>
                      </div>
                    </td>
                    <!-- Wed 数学分析3 3–4 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析3</div>
                        <div class="instructor">—</div>
                        <div class="location">N203 / N204</div>
                        <div class="weeks">9–14周</div>
                      </div>
                    </td>
                    <!-- Thu 数学分析（辅） 3–4 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">数学分析（辅）</div>
                        <div class="instructor">—</div>
                        <div class="location">N203</div>
                        <div class="weeks">—</div>
                      </div>
                    </td>
                    <!-- Fri 习思想概论（专题） 3–4 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-name">习思想概论（专题）</div>
                        <div class="instructor">—</div>
                        <div class="location">N204</div>
                        <div class="weeks">10–11周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <!-- Mon 习思想概论 6–7 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">习思想概论</div>
                        <div class="instructor">—</div>
                        <div class="location">N404</div>
                        <div class="weeks">10–12周</div>
                      </div>
                    </td>
                    <!-- Tue -->
                    <td></td>
                    <!-- Wed -->
                    <td></td>
                    <!-- Thu 数学分析拓展3（讨论班） 6–7 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-name">数学分析拓展3（讨论班）</div>
                        <div class="instructor">—</div>
                        <div class="location">S503</div>
                        <div class="weeks">1–8周</div>
                      </div>
                    </td>
                    <!-- Fri -->
                    <td></td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <!-- Wed 数学分析3 7–8 -->
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:50</div>
                      <div class="time-info end-info">16:40</div>
                      <div class="course-container">
                        <div class="course-name">数学分析3</div>
                        <div class="instructor">—</div>
                        <div class="location">N203 / N204</div>
                        <div class="weeks">9–14周</div>
                      </div>
                    </td>
                    <td></td>
                    <!-- Fri 人工智能与机器学习的数学基础 7–8 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:50</div>
                      <div class="time-info end-info">16:40</div>
                      <div class="course-container">
                        <div class="course-name">人工智能与机器学习的数学基础</div>
                        <div class="instructor">—</div>
                        <div class="location">W606 / S201</div>
                        <div class="weeks">1–14周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <!-- Tue 高等代数3（晚） 9–10 放到 Evening 区域更合适；此处空 -->
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <!-- Fri 人工智能与机器学习的数学基础 11–12 -->
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:05</div>
                      <div class="course-container">
                        <div class="course-name">人工智能与机器学习的数学基础</div>
                        <div class="instructor">—</div>
                        <div class="location">S201</div>
                        <div class="weeks">4–14周</div>
                      </div>
                    </td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <!-- Tue 高等代数3 9–10（晚） -->
                    <td></td>
                    <td class="has-class event-cell">
                      <div class="time-info start-info">16:45</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-name">高等代数3</div>
                        <div class="instructor">—</div>
                        <div class="location">N103</div>
                        <div class="weeks">11周</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Junior Year - Second Semester -->
          <div class="semester-timetable-container" id="junior-second">
            <h3 class="semester-title">Junior Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="junior-second-timetable">
                <!-- Empty timetable structure same as freshman-second -->
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Senior Year - First Semester -->
          <div class="semester-timetable-container" id="senior-first">
            <h3 class="semester-title">Senior Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="senior-first-timetable">
                <!-- Empty timetable structure same as freshman-second -->
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Senior Year - Second Semester -->
          <div class="semester-timetable-container" id="senior-second">
            <h3 class="semester-title">Senior Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="senior-second-timetable">
                <!-- Empty timetable structure same as freshman-second -->
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- USTC Timetable Section -->
        <div class="schedule-section" id="ustc-timetable-section">
          <div class="timetable-container">
            <table class="timetable" id="ustc-timetable">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Period Number</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <!-- Morning Section -->
                <tr>
                  <td rowspan="5" class="period-header">Morning</td>
                  <td class="period-number">1</td>
                  <td data-period="1" data-day="1"></td>
                  <td data-period="1" data-day="2"></td>
                  <td data-period="1" data-day="3"></td>
                  <td data-period="1" data-day="4"></td>
                  <td data-period="1" data-day="5"></td>
                  <td data-period="1" data-day="6"></td>
                  <td data-period="1" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">2</td>
                  <td data-period="2" data-day="1"></td>
                  <td data-period="2" data-day="2"></td>
                  <td data-period="2" data-day="3"></td>
                  <td data-period="2" data-day="4"></td>
                  <td data-period="2" data-day="5"></td>
                  <td data-period="2" data-day="6"></td>
                  <td data-period="2" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">3</td>
                  <td data-period="3" data-day="1"></td>
                  <td data-period="3" data-day="2"></td>
                  <td data-period="3" data-day="3"></td>
                  <td data-period="3" data-day="4"></td>
                  <td data-period="3" data-day="5"></td>
                  <td data-period="3" data-day="6"></td>
                  <td data-period="3" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">4</td>
                  <td data-period="4" data-day="1"></td>
                  <td data-period="4" data-day="2"></td>
                  <td data-period="4" data-day="3"></td>
                  <td data-period="4" data-day="4"></td>
                  <td data-period="4" data-day="5"></td>
                  <td data-period="4" data-day="6"></td>
                  <td data-period="4" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">5</td>
                  <td data-period="5" data-day="1"></td>
                  <td data-period="5" data-day="2"></td>
                  <td data-period="5" data-day="3"></td>
                  <td data-period="5" data-day="4"></td>
                  <td data-period="5" data-day="5"></td>
                  <td data-period="5" data-day="6"></td>
                  <td data-period="5" data-day="0"></td>
                </tr>
                
                <!-- Afternoon Section -->
                <tr>
                  <td rowspan="5" class="period-header">Afternoon</td>
                  <td class="period-number">6</td>
                  <td data-period="6" data-day="1"></td>
                  <td data-period="6" data-day="2"></td>
                  <td data-period="6" data-day="3"></td>
                  <td data-period="6" data-day="4"></td>
                  <td data-period="6" data-day="5"></td>
                  <td data-period="6" data-day="6"></td>
                  <td data-period="6" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">7</td>
                  <td data-period="7" data-day="1"></td>
                  <td data-period="7" data-day="2"></td>
                  <td data-period="7" data-day="3"></td>
                  <td data-period="7" data-day="4"></td>
                  <td data-period="7" data-day="5"></td>
                  <td data-period="7" data-day="6"></td>
                  <td data-period="7" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">8</td>
                  <td data-period="8" data-day="1"></td>
                  <td data-period="8" data-day="2"></td>
                  <td data-period="8" data-day="3"></td>
                  <td data-period="8" data-day="4"></td>
                  <td data-period="8" data-day="5"></td>
                  <td data-period="8" data-day="6"></td>
                  <td data-period="8" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">9</td>
                  <td data-period="9" data-day="1"></td>
                  <td data-period="9" data-day="2"></td>
                  <td data-period="9" data-day="3"></td>
                  <td data-period="9" data-day="4"></td>
                  <td data-period="9" data-day="5"></td>
                  <td data-period="9" data-day="6"></td>
                  <td data-period="9" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">10</td>
                  <td data-period="10" data-day="1"></td>
                  <td data-period="10" data-day="2"></td>
                  <td data-period="10" data-day="3"></td>
                  <td data-period="10" data-day="4"></td>
                  <td data-period="10" data-day="5"></td>
                  <td data-period="10" data-day="6"></td>
                  <td data-period="10" data-day="0"></td>
                </tr>
                
                <!-- Evening Section -->
                <tr>
                  <td rowspan="3" class="period-header">Evening</td>
                  <td class="period-number">11</td>
                  <td data-period="11" data-day="1"></td>
                  <td data-period="11" data-day="2"></td>
                  <td data-period="11" data-day="3"></td>
                  <td data-period="11" data-day="4"></td>
                  <td data-period="11" data-day="5"></td>
                  <td data-period="11" data-day="6"></td>
                  <td data-period="11" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">12</td>
                  <td data-period="12" data-day="1"></td>
                  <td data-period="12" data-day="2"></td>
                  <td data-period="12" data-day="3"></td>
                  <td data-period="12" data-day="4"></td>
                  <td data-period="12" data-day="5"></td>
                  <td data-period="12" data-day="6"></td>
                  <td data-period="12" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">13</td>
                  <td data-period="13" data-day="1"></td>
                  <td data-period="13" data-day="2"></td>
                  <td data-period="13" data-day="3"></td>
                  <td data-period="13" data-day="4"></td>
                  <td data-period="13" data-day="5"></td>
                  <td data-period="13" data-day="6"></td>
                  <td data-period="13" data-day="0"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <button class="add-event-btn" id="add-ustc-event">
            <i class="fas fa-plus"></i> Add Class
          </button>
          
          <!-- USTC Classes List -->
          <div class="ustc-classes-container" id="ustc-classes-container">
            <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
            <table class="ustc-classes-table" id="ustc-classes-table">
              <thead>
                <tr>
                  <th>Period Range</th>
                  <th>Course Name</th>
                  <th>Instructor</th>
                  <th>Location</th>
                  <th>Weeks</th>
                  <th>Days</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="ustc-classes-body">
                <!-- Classes will be added here -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Timetable Section -->
        <div class="schedule-section" id="timetable-section">
          <div class="week-navigation">
            <button class="week-nav-btn" id="prev-week-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="week-title" id="current-week">Week of Mon, Jan 1 - Sun, Jan 7</div>
            <button class="week-nav-btn" id="next-week-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div class="timetable-container">
            <table class="timetable" id="timetable">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody id="timetable-body">
                <!-- Timetable rows will be generated by JavaScript -->
              </tbody>
            </table>
          </div>
          
          <button class="add-event-btn" id="add-timetable-event">
            <i class="fas fa-plus"></i> Add Class/Event
          </button>
        </div>

        <!-- Calendar Section -->
        <div class="schedule-section active" id="calendar-section">
          <div id="calendar-container"></div>
          <button class="add-event-btn" id="add-calendar-event">
            <i class="fas fa-plus"></i> Add Event
          </button>
        </div>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="schedule-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
    
    <!-- Event Modal -->
    <div class="event-modal" id="event-modal">
      <div class="event-modal-content">
        <span class="event-modal-close" id="event-modal-close">&times;</span>
        <h3 class="event-modal-title" id="event-modal-title">Add New Class</h3>
        
        <form id="event-form">
          <input type="hidden" id="event-id">
          <input type="hidden" id="event-type">
          
          <div class="event-form-group">
            <label for="ustc-period-start">Period Start</label>
            <select id="ustc-period-start" class="event-form-control" required>
              <option value="1">1 (7:50-8:35)</option>
              <option value="2">2 (8:40-9:25)</option>
              <option value="3">3 (9:45-10:30)</option>
              <option value="4">4 (10:35-11:20)</option>
              <option value="5">5 (11:25-12:10)</option>
              <option value="6">6 (14:00-14:45)</option>
              <option value="7">7 (14:50-15:35)</option>
              <option value="8">8 (15:55-16:40)</option>
              <option value="9">9 (16:45-17:30)</option>
              <option value="10">10 (17:35-18:20)</option>
              <option value="11">11 (19:30-20:15)</option>
              <option value="12">12 (20:20-21:05)</option>
              <option value="13">13 (21:10-21:55)</option>
            </select>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-period-end">Period End</label>
            <select id="ustc-period-end" class="event-form-control" required>
              <option value="1">1 (7:50-8:35)</option>
              <option value="2">2 (8:40-9:25)</option>
              <option value="3">3 (9:45-10:30)</option>
              <option value="4">4 (10:35-11:20)</option>
              <option value="5">5 (11:25-12:10)</option>
              <option value="6">6 (14:00-14:45)</option>
              <option value="7">7 (14:50-15:35)</option>
              <option value="8">8 (15:55-16:40)</option>
              <option value="9">9 (16:45-17:30)</option>
              <option value="10">10 (17:35-18:20)</option>
              <option value="11">11 (19:30-20:15)</option>
              <option value="12">12 (20:20-21:05)</option>
              <option value="13">13 (21:10-21:55)</option>
            </select>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-course-name">Course Name</label>
            <input type="text" id="ustc-course-name" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-instructor">Instructor</label>
            <input type="text" id="ustc-instructor" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-location">Location</label>
            <input type="text" id="ustc-location" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label>Days</label>
            <div class="days-container">
              <label><input type="checkbox" name="ustc-day" value="1"> Mon</label>
              <label><input type="checkbox" name="ustc-day" value="2"> Tue</label>
              <label><input type="checkbox" name="ustc-day" value="3"> Wed</label>
              <label><input type="checkbox" name="ustc-day" value="4"> Thu</label>
              <label><input type="checkbox" name="ustc-day" value="5"> Fri</label>
              <label><input type="checkbox" name="ustc-day" value="6"> Sat</label>
              <label><input type="checkbox" name="ustc-day" value="0"> Sun</label>
            </div>
          </div>
          
          <div class="event-form-group weeks-container">
            <div class="weeks-title">Teaching Weeks (1-18)</div>
            <div class="weeks-grid" id="weeks-grid">
              <!-- Weeks checkboxes will be generated here -->
            </div>
            <div class="week-display" id="week-display"></div>
          </div>
          
          <div class="event-form-actions">
            <button type="button" class="event-form-btn event-form-btn-delete" id="event-delete-btn" style="display: none;">Delete</button>
            <button type="button" class="event-form-btn event-form-btn-cancel" id="event-cancel-btn">Cancel</button>
            <button type="submit" class="event-form-btn event-form-btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- General event modal -->
    <div class="event-modal" id="general-event-modal">
      <div class="event-modal-content">
        <span class="event-modal-close" id="general-event-modal-close">&times;</span>
        <h3 class="event-modal-title" id="general-event-modal-title">Add New Event</h3>
        
        <form id="general-event-form">
          <input type="hidden" id="general-event-id">
          <input type="hidden" id="general-event-type">
          
          <div class="event-form-group">
            <label for="event-title">Event Title</label>
            <input type="text" id="event-title" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="event-description">Description</label>
            <textarea id="event-description" class="event-form-control" rows="3"></textarea>
          </div>
          
          <div class="event-form-group">
            <label for="event-start">Start</label>
            <input type="datetime-local" id="event-start" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="event-end">End</label>
            <input type="datetime-local" id="event-end" class="event-form-control" required>
          </div>
          
          <div class="event-form-group" id="recurring-container" style="display: none;">
            <label>
              <input type="checkbox" id="event-recurring"> Recurring Event
            </label>
          </div>
          
          <div class="event-form-actions">
            <button type="button" class="event-form-btn event-form-btn-delete" id="general-event-delete-btn" style="display: none;">Delete</button>
            <button type="button" class="event-form-btn event-form-btn-cancel" id="general-event-cancel-btn">Cancel</button>
            <button type="submit" class="event-form-btn event-form-btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`);
