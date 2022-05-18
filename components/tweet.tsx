import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Box,
    IconButton,
    Tooltip,
    Link,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    FavoriteBorder,
    Repeat,
    DeleteOutline,
    MoreHoriz,
} from "@mui/icons-material";
import { useState } from "react";

function Tweet() {
    const [tweetMenuPosition, setTweetMenuPosition] =
        useState<null | HTMLElement>(null);
    const tweetMenuOpen = Boolean(tweetMenuPosition);
    const handleTweetMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTweetMenuPosition(event.currentTarget);
    };
    const handleClose = () => {
        setTweetMenuPosition(null);
    };

    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: "50%",
                minWidth: "xs",
                minHeight: "px",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                sx={{
                    borderRadius: "50%",
                    height: "48px",
                    width: "48px",
                    m: 2,
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1
                }}
            >

                <CardContent
                    sx={{
                        px:1,
                        py:2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 14, mr: 1 }}
                                color="text.primary"
                                gutterBottom
                            >
                                FirstName LastName
                            </Typography>
                        </Link>
                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                @username&nbsp;
                            </Typography>
                        </Link>
                        <Tooltip title="TIME" arrow enterDelay={500}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                &#183; 1h
                            </Typography>
                        </Tooltip>
                    </Box>

                    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore nemo earum provident perferendis, maxime vitae esse architecto sapiente dolorem laborum aspernatur, rerum pariatur accusantium recusandae est exercitationem enim iure.</Typography>
                </CardContent>

                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 1,
                    }}
                >
                    <Tooltip title="Retweet" arrow enterDelay={500}>
                        <IconButton aria-label="retweet" color="primary"
                            sx={{
                            }}>
                            <Repeat />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Like" arrow enterDelay={500}>
                        <IconButton aria-label="like" color="primary">
                            <FavoriteBorder />
                        </IconButton>
                    </Tooltip>
                    <>&nbsp;</>
                </CardActions>

            </Box>
            <Box>
                <IconButton
                    aria-label="more-options"
                    color="secondary"
                    onClick={handleTweetMenuClick}
                    sx={{
                        m: 1
                    }}
                >
                    <MoreHoriz />
                </IconButton>
                <Menu
                    open={tweetMenuOpen}
                    id="tweet-menu"
                    anchorEl={tweetMenuPosition}
                    onClose={handleClose}
                >
                    <MenuItem
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <DeleteOutline color="secondary" fontSize="inherit" />{" "}
                        <Typography sx={{ fontSize: 12 }}>Delete</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </Card>
    );
}

export default Tweet;