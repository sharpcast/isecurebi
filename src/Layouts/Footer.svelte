<script>
    import { Col, Container, Row } from "sveltestrap";
</script>

<footer class="footer">
    <Container fluid>
        <Row>
            <Col sm={6}>
                {new Date().getFullYear()} © iSecureBI.
            </Col>
            <Col sm={6}>
                <div class="text-sm-end d-none d-sm-block">
                    Develop by Sharpcast
                </div>
            </Col>
        </Row>
    </Container>
</footer>
