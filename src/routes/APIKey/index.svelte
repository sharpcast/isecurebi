<svelte:head>
  <title>API Key | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
    import {
        Button,
        Card,
        CardBody,
        CardHeader,
        Col,
        Container,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Input,
        Label,
        Modal,
        ModalBody,
        ModalHeader,
        Row,
        Dropdown,
        NavLink
    } from "sveltestrap";
    import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
    import DeleteModal from "../../Components/Common/CDeleteModal.svelte";
    import Widgets from "./Widgets.svelte";
    import apiKey from '../../common/data/apiKey'
    import { html } from "gridjs";
	  import Grid from "gridjs-svelte";
    import { SvelteWrapper } from 'gridjs-svelte/plugins';
    import Actions from './Actions.svelte';

    var show = false;
    const handleShow = () => (show = !show);
    const handleClose = () => (show = !show);
    let deleteModal = false;
    let deleteModalMulti = false;

    const data = apiKey.apiKey;

    const columns = [
      {
        name: "#",
        width: "40px",
        formatter: (cell) =>
          html(
            `<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`
          ),
      },
      {
        id: "name",
        name: "Name",
      },
      {
        id: "createBy",
        name: "Created By",
      },
      {
        id: "apikey",
        name: "API Key",
        formatter: (cell) =>
          html(
            `<input type="text" class="form-control apikey-value" readonly="" value="${cell}">`
          ),
      },
      {
        id: "color",
        name: "color",
        hidden: true
      },
      {
        id: "status",
        name: "Status",
        formatter: (cell, row) => {
				{
					if (cell == "Active") {
						return html(
							`<span class="badge badge-soft-${row.cells[4].data}">${cell}</span>`
						);
					} else if (cell == "Disable") {
						return html(
							`<span class="badge badge-soft-${row.cells[4].data}">${cell}</span>`
						);
					} else {
            return null;
          }
				}
			}
      },
      {
        id: "create_date",
        name: "Created Date",
      },
      {
        id: "expiry_date",
        name: "Expiry Date",
      },
      {
        name: 'Action',
        plugin: {
          component: SvelteWrapper,
          props: {
            component: Actions
          }
        }
      }
    ];
    
</script>
<div class="page-content">
    <DeleteModal
      show={deleteModal}
      onCloseClick={() => deleteModal = !deleteModal}
    />
    <DeleteModal
      show={deleteModalMulti}
      onDeleteClick={() => {
        deleteModalMulti = false
      }}
      onCloseClick={() => deleteModalMulti = !deleteModalMulti}
    />
    <Container fluid>
      <BreadCrumb title="API Key" pageTitle="Apps" />

      <Row>
        <Widgets />
      </Row>

      <Row>
        <Col lg={12}>
          <Card id="apiKeyList">
            <CardHeader class="d-flex align-items-center">
              <h5 class="card-title flex-grow-1 mb-0">API Keys</h5>
              <div class="d-flex gap-1 flex-wrap">
                <Button
                  type="button"
                  color="success"
                  class="btn create-btn"
                  data-bs-toggle="modal"
                  on:click={handleShow}
                  data-bs-target="#api-key-modal"
                >
                  <i class="ri-add-line align-bottom me-1"></i> Add API
                  Key
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div>
                <div class="table-card gridjs-border-none">
									<Grid
										{data}
										{columns}
										className={{ th: "text-muted" }}
										pagination={{
											enabled: true,
											limit: 10,
										}}
									/>
								</div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>

  <div
    class="modal fade"
    id="api-key-modal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <Modal isOpen={show} toggle={handleClose} class="modal-content">
        <ModalHeader class="modal-header">Create API Key</ModalHeader>
        <ModalBody class="modal-body">
          <form autoComplete="off">
            <div
              id="api-key-error-msg"
              class="alert alert-danger py-2 d-none"
            ></div>
            <Input type="hidden" id="apikeyId" />
            <div class="mb-3">
              <Label htmlFor="api-key-name" class="form-label">
                API Key Name <span class="text-danger">*</span>
              </Label>
              <Input
                type="text"
                class="form-control"
                id="api-key-name"
                placeholder="Enter api key name"
              />
            </div>
            <div
              class="mb-3"
              id="apikey-element"
              style="display: none"
            >
              <Label htmlFor="api-key" class="form-label">
                API Key
              </Label>
              <Input
                type="text"
                class="form-control"
                id="api-key"
                disabled
                value="b5815DE8A7224438932eb296Z5"
              />
            </div>
          </form>
        </ModalBody>
        <div class="modal-footer">
          <div class="hstack gap-2 justify-content-end">
            <Button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              on:click={handleClose}
            >
              Close
            </Button>
            <Button
              type="button"
              color="primary"
              id="createApi-btn"
            >
              Create API
            </Button>
          </div>
        </div>
      </Modal>
    </div>
</div>