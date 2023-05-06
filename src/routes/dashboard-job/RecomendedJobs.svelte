<script>
    import { Col, Card, CardBody, CardHeader, Row } from "sveltestrap";
    const data = [
    [
      "Full Stack Engineer",
      "Syntyce Solutions",
      "Zuweihir, UAE",
      "	$650 - $900",
      "	0-1+ year",
      "	Part Time",
    ],
    [
      "UI/UX designer",
      "Zoetic Fashion",
      "Cullera, Spain",
      "	$400+",
      "	$600 - $870",
      "Freelancer",
    ],
    [
      "Project Manager",
      "Meta4Systems",
      "Limestone, US",
      "$210 - $300",
      "0-2+ year",
      "Intership",
    ],
    [
      "Assistant / Store Keeper",
      "Moetic Fashion",
      "Limestone, US",
      "$600 - $870",
      "0-3 year",
      "Full Time",
    ],
    [
      "Marketing Director",
      "Meta4Systems",
      "Vinninga, Sweden",
      "$210 - $300",
      "0-2 year",
      "	Full Time",
    ],
    [
      "Marketing Director",
      "Zoetic Fashion",
      "Quesada, US",
      "	$600 - $870",
      "	0-5 year",
      "Freelancer",
    ],
  ];
</script>
<Col lg={12}>
    <Card>
      <CardHeader>
        <Row class="g-4 align-items-center">
          <Col class="col-sm-auto">
            <div>
              <h4 class="card-title mb-0 flex-grow-1">
                Recomended Jobs
              </h4>
            </div>
          </Col>
          <Col class="col-sm">
            <div class="d-flex justify-content-sm-end">
              <div class="search-box ms-2">
                <input
                  type="text"
                  class="form-control"
                  id="searchResultList"
                  placeholder="Search for jobs..."
                />
                <i class="ri-search-line search-icon">

                </i>
              </div>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div role="complementary" class="gridjs gridjs-container" style="width: 100%;">
            <div class="gridjs-wrapper" style="height: auto;">
            <table role="grid" class="gridjs-table" style="height: auto;">
            <thead class="gridjs-thead">
            <tr class="gridjs-tr">
            <th data-column-id="position" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Position</div>
        </th>
            <th data-column-id="companyName" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Company Name</div>
        </th>
            <th data-column-id="location" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Location</div>
        </th>
            <th data-column-id="salary" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Salary</div>
        </th>
            <th data-column-id="experience" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Experience</div>
        </th>
            <th data-column-id="jobType" class="gridjs-th gridjs-th-sort" tabindex="0">
            <div class="gridjs-th-content">Job Type</div>
        </th>
        </tr>
        </thead>
            <tbody class="gridjs-tbody">
            <tr class="gridjs-tr">
            <td class="gridjs-td">Full Stack Engineer</td>
            <td class="gridjs-td">Syntyce Solutions</td>
            <td class="gridjs-td">Zuweihir, UAE</td>
            <td class="gridjs-td">	$650 - $900</td>
            <td class="gridjs-td">	0-1+ year</td>
            <td class="gridjs-td">	Part Time</td>
        </tr>
            <tr class="gridjs-tr">
            <td class="gridjs-td">UI/UX designer</td>
            <td class="gridjs-td">Zoetic Fashion</td>
            <td class="gridjs-td">Cullera, Spain</td>
            <td class="gridjs-td">	$400+</td>
            <td class="gridjs-td">	$600 - $870</td>
            <td class="gridjs-td">Freelancer</td>
        </tr>
            <tr class="gridjs-tr">
            <td class="gridjs-td">Project Manager</td>
            <td class="gridjs-td">Meta4Systems</td>
            <td class="gridjs-td">Limestone, US</td>
            <td class="gridjs-td">$210 - $300</td>
            <td class="gridjs-td">0-2+ year</td>
            <td class="gridjs-td">Intership</td>
        </tr>
            <tr class="gridjs-tr">
            <td class="gridjs-td">Assistant / Store Keeper</td>
            <td class="gridjs-td">Moetic Fashion</td>
            <td class="gridjs-td">Limestone, US</td>
            <td class="gridjs-td">$600 - $870</td>
            <td class="gridjs-td">0-3 year</td>
            <td class="gridjs-td">Full Time</td>
        </tr>
            <tr class="gridjs-tr">
            <td class="gridjs-td">Marketing Director</td>
            <td class="gridjs-td">Meta4Systems</td>
            <td class="gridjs-td">Vinninga, Sweden</td>
            <td class="gridjs-td">$210 - $300</td>
            <td class="gridjs-td">0-2 year</td>
            <td class="gridjs-td">	Full Time</td>
        </tr>
        </tbody>
        </table>
    </div>
        <div class="gridjs-footer">
            <div class="gridjs-pagination">
            <div role="status" aria-live="polite" class="gridjs-summary" title="Page 1 of 2">Showing <b>1</b> to <b>5</b> of <b>6</b> results</div>
        <div class="gridjs-pages">
            <button tabindex="0" disabled="" title="Previous" aria-label="Previous" class="">Previous</button>
            <button tabindex="0" class="gridjs-currentPage" title="Page 1" aria-label="Page 1">1</button>
            <button tabindex="0" class="" title="Page 2" aria-label="Page 2">2</button>
            <button tabindex="0" title="Next" aria-label="Next" class="">Next</button>
        </div>
    </div>
    </div>
        <div id="gridjs-temp" class="gridjs-temp">
        </div>
    </div>
      </CardBody>
    </Card>
  </Col>