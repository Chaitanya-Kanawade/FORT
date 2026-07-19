import xml.etree.ElementTree as ET


def parse_nmap_xml(xml: str):
    root = ET.fromstring(xml)

    result = {
        "host": None,
        "status": None,
        "ports": []
    }

    host = root.find("host")

    if host is None:
        return result

    # Host Status
    status = host.find("status")
    if status is not None:
        result["status"] = status.attrib.get("state")

    # Address
    address = host.find("address")
    if address is not None:
        result["host"] = address.attrib.get("addr")

    # Ports
    ports = host.find("ports")

    if ports is not None:

        for port in ports.findall("port"):

            state = port.find("state")

            if state is None:
                continue

            if state.attrib.get("state") != "open":
                continue

            service = port.find("service")

            result["ports"].append({

                "port": int(port.attrib["portid"]),

                "protocol": port.attrib["protocol"],

                "service": service.attrib.get("name", "")
                if service is not None else "",

                "product": service.attrib.get("product", "")
                if service is not None else "",

                "version": service.attrib.get("version", "")
                if service is not None else ""

            })

    return result