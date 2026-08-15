"""CLI utilities for Open-Inspect Modal functions."""

from .app import app


@app.local_entrypoint()
def register_repo(
    owner: str = "",  # e.g., "your-github-username"
    name: str = "",  # e.g., "your-repo-name"
    branch: str = "main",
):
    """Register a repository for image building.

    Usage: modal run src/cli.py::register_repo --owner your-username --name your-repo
    """
    if not owner or not name:
        print("Error: --owner and --name arguments are required")
        print("Usage: modal run src/cli.py::register_repo --owner your-username --name your-repo")
        return
    from .functions import register_repository

    result = register_repository.remote(
        repo_owner=owner,
        repo_name=name,
        default_branch=branch,
        setup_commands=["npm install"],
        build_commands=["npm run build"],
    )
    print(f"Registered: {result}")


@app.local_entrypoint()
def list_repos():
    """List all registered repositories."""
    from .functions import list_repositories

    repos = list_repositories.remote()
    print(f"Repositories: {repos}")


@app.local_entrypoint()
def check_health():
    """Check service health."""
    from .functions import health_check

    result = health_check.remote()
    print(f"Health: {result}")
