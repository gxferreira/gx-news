const PLACEHOLDER_IMAGE = 'data:image/png;base64,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N84lhwWeGTKy6ThxiFgsdbHcxaxsqMQzxBFF1ShfyLmscN7irFbrrH1P/sJgQVvJcJ3mKBJYQhIpiJBRRwVVWIjSqpFiIk37MQ//iONPkUsmVwWMHAuoQYXk+MH/4He3ZnF6yk0KxoDeF9v+GAMCu0CrYdvfx7bdOgH8z8CV1vHXmsDcJ+mNjhY5Aoa2gYvrjibvAZc7QPhJlwzJkfw0hWIReD+jb8oDw7fAwJrbW3sfpw9AlrpavgEODoHxEmWve7y7r7u3f8+0+/sBDFxyfn/dRa4AAA12aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjdmM2NmYzUyLTg1ZGQtNGI4YS04ODEyLTk4MzZlMzE4ZWViYSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozYTYyZWM2NS1lMDViLTQ5ZWUtYjYxMC1hZDY3ZjcwYjgzODAiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MjYxN2U1Ni1jY2UxLTQxYjQtYWE2Zi1kYmYzZTk2ZTkzYjgiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY2MjEyMTU2MTIxNTU3NyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMjowOTowMlQwOToyNTo1OS0wMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjI6MDk6MDJUMDk6MjU6NTktMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMzJiYjNiOC05NTVhLTRmZDMtOTQ3OS02YjgxMTQxZjc0NzUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMDktMDJUMDk6MjY6MDEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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';

export default PLACEHOLDER_IMAGE;