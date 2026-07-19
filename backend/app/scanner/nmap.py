from app.scanner.runner import run_nmap
from app.scanner.parser import parse_nmap_xml


def start_nmap_scan(target: str):

    xml = run_nmap(target)

    parsed = parse_nmap_xml(xml)

    return parsed