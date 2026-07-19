import subprocess


def run_nmap(target: str):
    """
    Runs Nmap and returns XML output.
    """

    command = [
        "nmap",
        "-sV",
        "-Pn",
        "-oX",
        "-",
        target,
    ]

    result = subprocess.run(
        command,
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        raise Exception(result.stderr)

    return result.stdout