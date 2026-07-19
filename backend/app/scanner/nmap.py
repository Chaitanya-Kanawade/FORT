from app.scanner.runner import run_nmap


def start_nmap_scan(target: str):
    xml_output = run_nmap(target)

    return {
        "status": "completed",
        "target": target,
        "xml": xml_output,
    }