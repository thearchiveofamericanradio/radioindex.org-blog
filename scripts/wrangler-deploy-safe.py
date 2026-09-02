#!/usr/bin/env python3
"""Run wrangler deploy safely and terminate promptly upon trigger deployment confirmation."""
import subprocess
import sys
import time

def main():
    cmd = ["npx", "wrangler", "deploy"]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    deployed = False
    for line in proc.stdout:
        print(line, end="", flush=True)
        if "Current Version ID:" in line:
            deployed = True
            time.sleep(1.5)
            proc.terminate()
            break
    if not deployed:
        proc.wait()
    sys.exit(0 if deployed else (proc.returncode or 0))

if __name__ == "__main__":
    main()
