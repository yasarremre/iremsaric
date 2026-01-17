# Build Stage
FROM golang:1.23-alpine AS builder

# Install build dependencies required for CGO (sqlite3)
RUN apk add --no-cache gcc musl-dev

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build the application
# CGO_ENABLED=1 is required for go-sqlite3
RUN CGO_ENABLED=1 GOOS=linux go build -o server ./cmd/api/main.go

# Final Stage
FROM alpine:latest

WORKDIR /app

# Install runtime dependencies for sqlite if needed (usually static but good to have)
RUN apk add --no-cache ca-certificates sqlite-libs

# Copy binary from builder
COPY --from=builder /app/server .
# Copy existing database if you want to ship it with data (optional, but requested to keep current state)
# WARNING: This DB will be reset on every deploy in Render Free Tier
COPY --from=builder /app/iremsaric.db .

# Expose port (Render sets PORT env var)
EXPOSE 8080

# Command to run
CMD ["./server"]
